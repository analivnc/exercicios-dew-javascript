let valoresMonetarios = [
    "500",
    "350.50",
    "1000"
];

// Função responsável pelo cálculo
function calcularTotal(valoresMonetarios) {
    let total = 0;

    for (let i = 0; i < valoresMonetarios.length; i++) {
        let valor = Number(valoresMonetarios[i]);

        // Ignora valores inválidos
        if (!isNaN(valor)) {
            total += valor;
        }
    }

    return total;
}

let total = calcularTotal(valoresMonetarios);

console.log(`Total: R$ ${total}`);

if (total >= 2000) {
    console.log("Limite ultrapassado");
} else {
    console.log("Gastos dentro do limite");
}