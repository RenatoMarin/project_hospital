class HospitalService {
    
    constructor(){
        this.hospitais = []
    }

    cadastrarHospital(hospital){
        this.hospitais.push(hospital)
    }
    excluirHospital(id){

    }
    alterarHospital(hospital){

    }
    buscarHospital(hospital){

    }
    buscarTodosHospitais(){
        return this.hospitais;
    }
}

module.exports = HospitalService