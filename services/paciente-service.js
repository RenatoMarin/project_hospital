const PacienteRepoArray = require("../repositories/paciente-repo-array")

class PacienteService {
    
    constructor(){
        this.pacienteRepository = new PacienteRepoArray()
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