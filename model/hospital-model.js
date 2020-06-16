const mongoose = require('mongoose');
const Hospital = require('../domain/hospital-domain');

//DEFINIR MODELO DE INSTRUTURA DA COLECTION
const HospitalSchema = new mongoose.Schema(
    {
        nome:String, 
        leitos:String, 
        tipo:String,
    }
)
// const HospitalSchema = new mongoose.Schema(
//     {
//         nome:String, 
//         leitos:String, 
//         tipo:String,
//         pacientes: [{
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'Paciente'
//         }]
//     }
// )

//OBJETO QUE CONTÊM OS DADOS
HospitalSchema.loadClass(Hospital)
module.exports = mongoose.model('Hospital', HospitalSchema);
