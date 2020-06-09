const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require("path")
const Paciente = require("./paciente")
const PacienteService = require("./paciente-service")
const Hospital = require("./hospital")
const HospitalService = require("./hospital-service")

var hospitalService = new HospitalService()
var pacienteService = new PacienteService()

app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))

var myLogger = function(req,res,next){
    console.log('LOGGED')
    next()
}
app.use(myLogger)

//MÉTODO GET
app.get("/paciente", (req, res)=>{
    res.json(pacienteService.buscarTodosPacientes())
})
app.get("/hospital", (req, res)=>{
    res.json(hospitalService.buscarTodosHospitais())
})
//FIM GET

//MÉTODO POST (Paciente)
app.post("/paciente", (req, res)=>{
    let paciente = new Paciente(req.body.nome, req.body.idade, req.body.genero);
    pacienteService.cadastrarPaciente(paciente)
    res.json(paciente)
})
//MÉTODO POST (Hospital)
app.post("/hospital", (req, res)=>{
    let hospital = new Hospital(req.body.nome, req.body.leitos, req.body.tipo);
    hospitalService.cadastrarHospital(hospital)
    res.json(hospital)
})
//FIM POST

//MÉTODO PUT
app.put("/", (req, res)=>{
    res.send('Chamou PUT')
})
//FIM PUT

//MÉTODO DELETE
app.delete("/paciente/:id", (req, res)=>{
    pacienteService.excluirPaciente(req.id)
})
app.delete("/hospital/:id", (req, res)=>{
    hospitalService.excluirHospital(req.id)
})
//FIM DELETE

app.listen(port, function() {
    console.log(`Server running at http://localhost:${port}/`);
})