var Homem = function(nome,idade){
	this.nome = nome;
	this.idade = idade;
	this.sexo = "masculino";
};

var joao = new Homem("João",20);
console.log(joao);

var pedro = {};
Homem.call(pedro,"Pedro",29);
Homem.apply(pedro,["Pedro",26]);
console.log(pedro);