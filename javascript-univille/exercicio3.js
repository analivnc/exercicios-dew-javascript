const autores = "Machado de Assis,Clarice Lispector,Monteiro Lobato";

const listaAutores = autores.split(",");

for (let i = 0; i < listaAutores.length; i++) {
    console.log(listaAutores[i]);
}

if (listaAutores.includes("Clarice Lispector")) {
    console.log("Autor encontrado");
} else {
    console.log("Autor não encontrado");
}

function mostrarLivro(titulo, autor) {
    return `O livro "${titulo}" foi escrito por ${autor}.`;
}

console.log(mostrarLivro("Dom Casmurro", "Machado de Assis"));

console.log(listaAutores.join(" , "));