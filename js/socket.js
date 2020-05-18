const socket = io('https://emojiu.isjeff.com')
let sioID
let sioAll
let sioName = "Player-" + parseInt(Math.random() * 10000)

let CheckChanging = false

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
        //console.log("Socket connect established, Id: " + sioID + " Name:" + sioName)
    }
})

socket.on('sync', (data)=>{

    if(!CheckChanging){

        CheckChanges(data, ()=>{
            sioAll = data
            CheckChanging = false
        })

        console.log(sioAll)
    }
})


function CheckChanges(data, callback){

    if(!data || !sioAll || CheckChanging){
        callback(true)
        return
    }

    CheckChanging = true

    for(let i=0;i<data.length;i++){
        let el = data[i]
        console.log(indexOfObj(el.id, 'id', sioAll))
        if(indexOfObj(el.id, 'id', sioAll) == false && el.id != sioID){
            console.log("add")
            PlayerAdd(el.id)
        }
    }

    for(let ii = 0; ii < sioAll.length; ii++){
        let cl = sioAll[ii]
        if(indexOfObj(cl.id, 'id', data) == false && cl.id != sioID){
            PlayerRemove(cl.id)
        }
    }

    

    callback(true)
}

function indexOfObj(target, key, objArr){

    let res = false

    for(let i=0;i<objArr.length;i++){
        let el = objArr[i]
        if(el[key] == target){
            res = i
        }
    }

    return res
}