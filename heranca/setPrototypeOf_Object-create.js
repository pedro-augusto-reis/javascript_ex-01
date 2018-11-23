var homem = {
	genero: "masculino"
};

var joao = {
	nome: "João",
	idade: 20
};

// var pedro = {
// 	nome: "Pedro",
// 	idade: 29
// };
var pedro = Object.create(homem);
pedro.nome = "Pedro";
pedro.idade = 29;

Object.setPrototypeOf(joao,homem);

console.log(joao);
console.log(joao.genero);

console.log(pedro);
console.log(pedro.genero);