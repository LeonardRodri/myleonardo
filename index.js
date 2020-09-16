const express = require('express')
const path = require('path')
const app = express() 

app.listen(3000, () =>{
    console.log("Deu certo! 3000 ")
})

app.get('/',(req,resp) => {
    resp.sendFile(path.join(__dirname,'./index.html'))
})