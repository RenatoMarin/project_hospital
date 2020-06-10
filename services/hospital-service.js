const HospitalRepoArray = require("../repositories/hospital-repo-array")

class HospitalService {
    
    constructor(){
        this.hospitalRepository = new HospitalRepoArray()
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
    buscarHospital(hospital){
        this.hospitalRepository.buscarHospital(hospital)
    }
    buscarTodosHospitais(){
        return this.hospitalRepository.buscarTodosHospitais()
    }
}

module.exports = HospitalService