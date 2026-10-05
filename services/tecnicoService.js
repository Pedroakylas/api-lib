const tecnicos = [
    {
        nome:"João da silva",
        especialidade:'Redes'
    },
    {
        nome:"João Connor",
        especialidade:'Software'
    },
    {
        nome:"Maria dos Santos",
        especialidade:'Hardware'
    }
];

function buscaPorEspecialidade(especialidade){
    return tecnicos.find(tecnico=>{
        tecnico.especialidade === especialidade;
    });
}

module.exports = {
    buscaPorEspecialidade
};