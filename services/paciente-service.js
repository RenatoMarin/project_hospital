//const PacienteRepoArray = require("../repositories/paciente-repo-array")
const PacienteRepoMongo = require("../repositories/paciente-repo-mongo")

class PacienteService {
    
    constructor(){
        this.pacienteRepository = new PacienteRepoMongo()
    }

    cadastrarPaciente(paciente){
        this.pacienteRepository.cadastrarPaciente(paciente)
    }
    excluirPaciente(id){
        this.pacienteRepository.excluirPaciente(id)
    }
    alterarPaciente(paciente){
        this.pacienteRepository.alterarPaciente(paciente)
    }
    buscarPaciente(paciente){
        this.pacienteRepository.buscarPaciente(paciente)
    }
    buscarTodosPacientes(){
        return this.pacienteRepository.buscarTodosPacientes()
    }
}

module.exports = PacienteService