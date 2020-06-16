const mongoose = require("mongoose")
const PacienteModel = require("../model/paciente-model")

class PacienteRepositoryMongo {
    
    constructor(){
        this.model = PacienteModel
    }

    cadastrarPaciente(paciente){
        this.model.create(paciente, function(err, suc){
            if(err) return handleError(err);
            console.log("Paciente cadastrado")
        })
    }
    excluirPaciente(id){

    }
    alterarPaciente(paciente){

    }
    buscarPaciente(paciente){

    }
    buscarTodosPacientes(){
        const query = this.model.find({})
        const promise = query.exec()
        return promise;
    }
}

module.exports = PacienteRepositoryMongo