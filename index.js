const express = require('express')
const path = require('path')
const app = express() 
const PORTA = process.env.PORT || 3000

app.listen(PORTA, () =>{
    console.log(`Deu certo! ${PORTA}`)
})

app.get('/',(req,resp) => {
    resp.sendFile(path.join(__dirname,'./index.html'))
})