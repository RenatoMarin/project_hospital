const express = require('express')
var router = express.Router()

//CONSTRUTORES
const Hospital = require("../model/hospital-model");
const Paciente = require("../model/paciente-model");
const HospitalService = require("../services/hospital-service")
var hospitalService = new HospitalService()

//MÉTODO GET
router.get("/hospital", async (req, res)=>{
    //ESPERA O RESULTADO DA PROMISE
    const hospitais = await hospitalService.buscarTodosHospitais();
    res.json(hospitais)
})

//MÉTODO POST (Hospital)
router.post("/hospital", (req, res)=>{
    //let hospital = new Hospital({_id: new mongoose.Types.ObjectId(), nome: req.body.nome, leitos: req.body.leitos, tipo: req.body.tipo});
    let hospital = new Hospital({nome: req.body.nome, leitos: req.body.leitos, tipo: req.body.tipo});
    hospitalService.cadastrarHospital(hospital)
    res.json(hospital)
})

router.get("/hospital/:id", async (req, res)=>{
    //ESPERA O RESULTADO DA PROMISE
    const hospitais = await hospitalService.buscarHospital(req.params.id);
    res.json(hospitais)
})
// router.put("/paciente/:hospId", async (req, res)=>{
//     try {
//         const {nome, leitos, tipo, pacientes} = req.body;
//         const hospital = await Hospital.findByIdAndUpdate(req.params.hospId, {
//             nome,
//             leitos,
//             tipo
//         }, {new: true});

//         await Promise.all(pacientes.map(async paciente => {
//             const hospitalPaciente = new Paciente({ ...paciente, hospital: hospital._id});

//             await hospitalPaciente.save();

//             hospital.paciente.push(hospitalPaciente);
            
//         }));

//         await hospital.save();

//         return res.send({ hospital })

//     } catch (err) {
//         console.log('Error');
//     }
// })

//MÉTODO DELETE
router.delete("/hospital/:id", (req, res)=>{
    hospitalService.excluirHospital(req.id)
})

//MÉTODO PUT
router.put("/", (req, res)=>{
    res.send('Chamou PUT')
})

module.exports = router