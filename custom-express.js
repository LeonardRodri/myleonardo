const express = require('express')
const app = express() 
const PORTA = process.env.PORT || 3000

app.use('/static',express.static('public'))

app.listen(PORTA, () =>{
    console.log(`Deu certo! ${PORTA}`)
})

module.exports = app