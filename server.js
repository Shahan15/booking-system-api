const express = require('express');
const app = express();
const fs = require('fs')
const {isArrayEmpty} = require('./helpers/arrayEmpty')
const {roomsDataPath} = require('./config/paths')


const roomsData = JSON.parse(fs.readFileSync(roomsDataPath,'utf-8'))
//readfile just returns it as a string
//JSON.parse turns it into a JS object/array


let Rooms;

let Bookings;
        
app.use(express.json())

app.get('/',(req,res) => {
    res.status(200).json({status : 'ok'})
})

app.get('/api/rooms',(req,res) =>{
   
    res.status(200).json({data : roomsData})

});


app.listen(3000,()=>{
    console.log("Listening on port 3000")
});