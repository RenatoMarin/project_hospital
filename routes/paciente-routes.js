const express = require('express')
var router = express.Router()

//CONSTRUTORES
const Paciente = require("../paciente")
const PacienteService = require("../paciente-service")
var pacienteService = new PacienteService()

//MÉTODO GET
router.get("/paciente", (req, res)=>{
    res.json(pacienteService.buscarTodosPacientes())
})

//MÉTODO POST
router.post("/paciente", (req, res)=>{
    let paciente = new Paciente(req.body.nome, req.body.idade, req.body.genero);
    pacienteService.cadastrarPaciente(paciente)
    res.json(paciente)
})

//MÉTODO DELETE
router.delete("/paciente/:id", (req, res)=>{
    pacienteService.excluirPaciente(req.id)
})

//MÉTODO PUT
router.put("/", (req, res)=>{
    res.send('Chamou PUT')
})

module.exports = router