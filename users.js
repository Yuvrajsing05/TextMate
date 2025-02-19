const users = [];

const userJoin = (id,username,room) =>{
    const user = {username,id,room};
    users.push(user);
    return user;
}

const getRoomUsers = (room)=>{
       return users.filter(user=>user.room==room);
}

const getCurrentUser = (id)=>{
    return users.find(user=>user.id==id);
}

const userLeave = (id)=>{
    const index = users.findIndex(user=>user.id==id);

    if(index !=-1) {
        return users.splice(index,1)[0];
    }
}

const moment = require("moment");

const formateMessage = (username,text)=>{
    return {
        username,
        text,
        time: moment().format('h:mm:s a')
    }
}

module.exports = {userJoin,getRoomUsers,getCurrentUser,userLeave,formateMessage}

