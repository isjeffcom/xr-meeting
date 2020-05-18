AFRAME.registerComponent('oplayer', {
    init: function () {
        this.el.object3D.position.set(0, 2, 0)

        socket.on('to_', (data)=>{
            if(data.id == this.el.getAttribute('id')){
                this.el.object3D.position.x = data.x
                this.el.object3D.position.y = data.y
                this.el.object3D.position.z = data.z

                // Start Animation
                this.el.setAttribute('animation-mixer', {timeScale: 0})
            }
            
        })

        this.el.setAttribute('animation-mixer', {timeScale: 1})
    },

    tick: function(){

        

    }
    
})

let aSceneCont = document.querySelector("a-scene")
let PlayerList = []

function PlayerAdd(id){
    if(aSceneCont && PlayerList.indexOf(id) == -1){

        let ele = document.createElement("a-entity")
        ele.setAttribute("id", id)
        ele.setAttribute("oplayer", "")
        ele.setAttribute("gltf-model", "#man")
        ele.setAttribute("scale", "0.01 0.01 0.01")
        ele.setAttribute("animation-mixer", true)
        
        aSceneCont.appendChild(ele)
        PlayerList.push(id)
    }
}

function PlayerRemove(id){
    let all = aSceneCont.children
    for(let i=0;i<all.length;i++){
        let el = all[i]
        if(el.getAttribute('id') == id){
            aSceneCont.removeChild(el)
        }
    }

    if(PlayerList.length > 0){
        let idx = PlayerList.indexOf(id)
        PlayerList.splice(idx, 1)
    }
   
}