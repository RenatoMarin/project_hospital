const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require("path")
const mongoose = require('mongoose')

//ROTAS
const pacienteRoutes = require("./routes/paciente-routes")
const hospitalRoutes = require("./routes/hospital-routes")

app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))

app.use(pacienteRoutes)
app.use(hospitalRoutes)

app.listen(port, function() {
    console.log(`Server running at http://localhost:${port}/`);
})

//BANCO MONGOOSE CONEXÃO
mongoose.connect('mongodb+srv://admin:GcRIfJjrvhTtXI49@cluster0-lodx3.mongodb.net/bd_hospital?retryWrites=true&w=majority',
 {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Tudo funcionando!")
});