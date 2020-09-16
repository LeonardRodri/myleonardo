const app = require('./custom-express')
const path = require('path')

app.get('/',(req,resp) => {
    resp.sendFile(path.join(__dirname,'./index.html'))
})

console.log("Ola")