const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require("path")

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