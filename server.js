const express = require('express');
const app = express();
const {isArrayEmpty} = require('./helpers/arrayEmpty')

let resourceHolder = []
app.use(express.json())



app.get('/', (req,res)=>{
    res.send("Hello world")
})

app.post('/resources', (req,res) => {
    const newResource = req.body
    
    if(!newResource.name){
        res.status(400).json({message:"Resource name is required"})
    } else {
        res.status(200).json(resourceHolder)
    }
});

app.get('/resources',(req,res) =>{
    if(isArrayEmpty(resourceHolder) === true){
        res.status(200).json({message: "Array is empty, cannot fetch resource"})
    } else {
        res.status(200).json({message: "fetching resources...",
            resourceHolder
        });
    }

    console.log(resourceHolder)
});




app.listen(3000,()=>{
    console.log("Listening on port 3000")
});