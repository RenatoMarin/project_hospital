const express = require('express')
var router = express.Router()

//CONSTRUTORES
const Paciente = require("../model/paciente-model")
const PacienteService = require("../services/paciente-service")
var pacienteService = new PacienteService()

//MÉTODO GET
router.get("/paciente", async (req, res)=>{
    //ESPERA O RESULTADO DA PROMISE
    const pacientes= await pacienteService.buscarTodosPacientes();
    res.json(pacientes)
})

//MÉTODO POST
router.post("/paciente", (req, res)=>{
    let paciente = new Paciente({nome: req.body.nome, idade: req.body.idade, genero: req.body.genero, hospitalName: req.body.hospitalName, hospId: req.body.hospId});
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