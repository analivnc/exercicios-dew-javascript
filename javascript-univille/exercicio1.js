let produto = {
    nome: "Monitor",
    categoria: "Informática",
    preco: "899.90", 
    estoque: 5
};

produto.preco = Number(produto.preco);


if (isNaN(produto.preco)) {
    console.log("Preço inválido!");
} else {
    console.log("Preço válido!");
}


function mostrarProduto(produto) {
    console.log("Produto:", produto.nome);
    console.log("Categoria:", produto.categoria);
    console.log("Preço: R$", produto.preco);
}

mostrarProduto(produto);


if (produto.estoque < 10) {
    console.log("Estoque baixo");
} else {
    console.log("Estoque adequado");
}

console.log(Object.keys(produto));


for (let propriedade in produto) {
    console.log(propriedade + ": " + produto[propriedade]);
}

console.log("Tipo do nome:", typeof produto.nome);
console.log("Tipo da categoria:", typeof produto.categoria);
console.log("Tipo do preço:", typeof produto.preco);
console.log("Tipo do estoque:", typeof produto.estoque);