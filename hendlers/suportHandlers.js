function suporteN1(chamado){
    console.log("N1 recebeu o chamado");
    if(chamado.prioridade === "normal"){
        console.log("N1 assumiu o chamado");
        return "suporte N1 atendeu";
    }
    console.log("N1 nao coonseguiu resolver")
    console.log("encaminhou para N2...")
    return suporteN2(chamado);
};


function suporteN2(chamado){
    console.log("N2 recebeu o chamado");
    if(chamado.prioridade === "nmedia"){
        console.log("N2 assumiu o chamado");
        return "suporte N2 atendeu";
    }
    console.log("N1 nao coonseguiu resolver")
    console.log("encaminhou para ESPECIALISTA...")
    return especialista(chamado);
};
function especialista(chamado){
    console.log("ESPECIALISTA recebeu o chamado");
    if(chamado.prioridade === "alta"){
        console.log("ESPECIALISTA assumiu o chamado");
        return "suporte ESPECIALISTA atendeu";
    }
    
    throw new Error("Nenhum responsável econtrado!")
};

module.exports = {
    suporteN1
}


