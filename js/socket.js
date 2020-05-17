const socket = io('http://emojiu.isjeff.com')
let sioID
let sioAll
let sioName = "Player-" + parseInt(Math.random() * 10000)

const deviceData = {
    type: "Web",
    username: sioName,
    password: "hello",
    platform: navigator.platform
}


socket.emit('reg', deviceData)

socket.on('reg_back', (data)=>{
    if(data.username == sioName){
        sioID = data.id
        console.log("Socket connect established, Id: " + sioID + " Name:" + sioName)
    }
})

socket.on('sync', (data)=>{
    sioAll = data
    console.log(sioAll)
})