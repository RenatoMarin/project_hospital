const mongoose = require('mongoose');
const Paciente = require('../domain/paciente-domain');

//DEFINIR MODELO DE INSTRUTURA DA COLECTION
const PacienteSchema = new mongoose.Schema({
    nome:String, 
    idade:String, 
    genero:String,
    hospitalName:String,
    hospId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital'
    }
})
// const PacienteSchema = new mongoose.Schema({
//     nome:String, 
//     idade:String, 
//     genero:String,
//     hospital:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Hospital'
//     }
// })
//OBJETO QUE CONTÊM OS DADOS
PacienteSchema.loadClass(Paciente)
module.exports = mongoose.model('Paciente', PacienteSchema);