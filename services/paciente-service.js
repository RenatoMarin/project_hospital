class PacienteService {
    
    constructor(){
        this.pacientes = []
    }

    cadastrarPaciente(paciente){
        this.pacientes.push(paciente)
    }
    excluirPaciente(id){

    }
    alterarPaciente(paciente){

    }
    buscarPaciente(paciente){

    }
    buscarTodosPacientes(){
        return this.pacientes;
    }
}

module.exports = PacienteService