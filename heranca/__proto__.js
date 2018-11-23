/*
objetos herdam de outros objetos
*/

var homem = {
	genero: "masculino"
};

var joao = {
	nome: "João",
	idade: 20,
	__proto__: homem
};

var pedro = {
	nome: "Pedro",
	idade: 18,
	__proto__: homem
};

console.log(joao);
console.log(joao.genero);
console.log(pedro);
console.log(pedro.genero);