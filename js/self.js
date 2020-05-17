var lastPosi = {x: 0}

AFRAME.registerComponent('self-cont', {
    init: function () {
        
    },

    tick: function(){

        // Set Rotation
        this.el.object3D.rotation.set(0, camera.object3D.rotation.y, 0)

        // If have changed
        if(lastPosi.x == camera.object3D.position.x){

            // Start Animation
            this.el.setAttribute('animation-mixer', {timeScale: 0})

        } else {

            // Camera Position
            this.el.object3D.position.x = camera.object3D.position.x
            this.el.object3D.position.y = camera.object3D.position.y - 2.2
            this.el.object3D.position.z = camera.object3D.position.z

            // Stop Animation
            this.el.setAttribute('animation-mixer', {timeScale: 1})

            if(sioID){
                socket.emit('to', {
                    id: sioID, 
                    x: this.el.object3D.position.x, 
                    y: this.el.object3D.position.y, 
                    z: this.el.object3D.position.z
                })
            }
            
        }


        // Save last position
        lastPosi = this.el.object3D.position

    }
    
});