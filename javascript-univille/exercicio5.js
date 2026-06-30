const evento = {
    nome: "Semana da Tecnologia",
    local: "Auditório",
    data: new Date("2026-08-20"),
    participantes: ["Ana", "Carlos", "Marcos"]
};

// Função para exibir os dados do evento
function exibirEvento(evento) {
    console.log(`Evento: ${evento.nome}`);
    console.log(`Local: ${evento.local}`);
    console.log(evento.data.toLocaleDateString("pt-BR"));

    console.log(`Participantes: ${evento.participantes.length}`);

    if (evento.participantes.length > 0) {
        console.log("Há participantes cadastrados");
    } else {
        console.log("Nenhum participante cadastrado");
    }

    console.log(`Local cadastrado: ${"local" in evento}`);

    console.log("Propriedades e valores:");
    for (let propriedade in evento) {
        console.log(`${propriedade}:`, evento[propriedade]);
    }

    console.log("\nTipos das informações:");
    console.log(`nome: ${typeof evento.nome}`);
    console.log(`local: ${typeof evento.local}`);
    console.log(`data: ${typeof evento.data}`);
    console.log(`participantes: ${typeof evento.participantes}`);
}

exibirEvento(evento);