let disciplinas = [
    "HTML",
    "CSS",
    "JavaScript"
];
for(let i = 0; i < disciplinas.length; i++){
    console.log(disciplinas[i]);
}

console.log(`Total: ${disciplinas.length}`);


if (disciplinas.includes("JavaScript"))
    console.log("O aluno cursa Javascript!");


disciplinas.push("Banco de dados");

for(let i = 0; i < disciplinas.length; i++){
    console.log(disciplinas[i]);
}

disciplinas = [
    "Banco de Dados",
    "",
    "TCC",
    "Redes"
];

for(let i = 0; i < disciplinas.length; i++) {
    if (disciplinas[i] === "") {
    continue;
}

    console.log(disciplinas[i]);



if (disciplinas[i] === "TCC") {
    console.log("Laço interrompido");
    break;
}

}