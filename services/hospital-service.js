//const HospitalRepoArray = require("../repositories/hospital-repo-array")
const HospitalRepoMongo = require("../repositories/hospital-repo-mongo")

class HospitalService {
    
    constructor(){
        this.hospitalRepository = new HospitalRepoMongo()
    }

    cadastrarHospital(hospital){
        this.hospitalRepository.cadastrarHospital(hospital)
    }
    excluirHospital(id){
        this.hospitalRepository.excluirHospital(id)
    }
    alterarHospital(hospital){
        this.hospitalRepository.alterarHospital(hospital)
    }
    buscarHospital(id){
        return this.hospitalRepository.buscarHospital(id)
    }
    buscarTodosHospitais(){
        return this.hospitalRepository.buscarTodosHospitais()
    }
}

module.exports = HospitalService