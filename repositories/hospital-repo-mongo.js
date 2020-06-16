const mongoose = require("mongoose")
const HospitalModel = require("../model/hospital-model")

class HospitalRepositoryMongo {
    
    constructor(){
        this.model = HospitalModel
    }

    cadastrarHospital(hospital){
        this.model.create(hospital, function(err, suc){
            if(err) return handleError(err);
            console.log("Hospital cadastrado")
        })
    }
    excluirHospital(id){

    }
    alterarHospital(hospital){

    }
    buscarHospital(id){
        const query = this.model.findById(id)
        const promise = query.exec()
        return promise;
    }
    buscarTodosHospitais(){
        const query = this.model.find({})
        const promise = query.exec()
        return promise;
    }
}

module.exports = HospitalRepositoryMongo