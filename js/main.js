const camera = document.querySelector("#camera")
const selfMan = document.querySelector('#self-man')

const initPosi = {x: 0, y: 2, z:0}
const manInitPosi = {x: initPosi.x, y: initPosi.y - 1.6, z: initPosi.z+0.3}


MainInit()

function MainInit(){
    InitPosition()
}

function InitPosition () {
    camera.setAttribute('position', initPosi)
    //selfMan.setAttribute('position', manInitPosi)
}