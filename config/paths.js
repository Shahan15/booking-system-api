const path = require('path'); 

const roomsDataPath = path.join(__dirname,'..','data','rooms.json') 
//path.join makes it work on any OS

module.exports = {roomsDataPath}

