const express = require('express')
const app = express()
const path = require('path')

//settings
app.set('port', 3000)

//midewares
app.use(express.static(path.join(__dirname,'public')))

//routes
app.get('/',(req,res)=> {
    res.send('Bienvenidos')
})

app.listen(app.get('port'), ()=>{
    console.log(`aplicación corriendo en puerto 3000 ${app.get('port')}`)
})