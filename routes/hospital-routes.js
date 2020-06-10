const express = require('express')
var router = express.Router()

//CONSTRUTORES
const Hospital = require("../hospital")
const HospitalService = require("../hospital-service")
var hospitalService = new HospitalService()

//MÉTODO GET
router.get("/hospital", (req, res)=>{
    res.json(hospitalService.buscarTodosHospitais())
})

//MÉTODO POST (Hospital)
router.post("/hospital", (req, res)=>{
    let hospital = new Hospital(req.body.nome, req.body.leitos, req.body.tipo);
    hospitalService.cadastrarHospital(hospital)
    res.json(hospital)
})

//MÉTODO DELETE
router.delete("/hospital/:id", (req, res)=>{
    hospitalService.excluirHospital(req.id)
})

//MÉTODO PUT
router.put("/", (req, res)=>{
    res.send('Chamou PUT')
})

module.exports = router