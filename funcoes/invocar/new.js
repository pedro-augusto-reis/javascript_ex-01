//var nome = 'Jorge';
nome = 'Joao';
sobrenome = 'Pereira';

var nomeGlobal_02 = 'Alice';

// criando objeto diretamente
var nomeA = {primeiro: 'Pedro', sobrenome: 'Reis'};
var nomeB = {primeiro: 'Pedro', sobrenome: 'Reis'};

/*
funcoes construtoras
*/
var Pessoa = function(nome,idade){
	this.nome = nome;
	this.idade = idade;
};

console.log('');
console.log('funcoes contrutoras');
console.log(new Pessoa("Pedro", 20)); // cria o objeto e passa os parametros por meio do this
console.log(new Pessoa("Maria", 30));

/*
funcoes fabrica
*/
var criarPessoa = function(nome,sobrenome){
	return {
		nome: nome,
		sobrenome: sobrenome
	};
};

var criarPessoaGlobal = function(nome,sobrenome){
	return {
		nome: this.nome,
		sobrenome: this.sobrenome
	};
};

console.log('');
console.log('funcoes fabrica');
console.log(criarPessoa('Pedro', 'Reis'));
console.log(criarPessoaGlobal('Pedro', 'Reis'));

/*
analise variavel global
*/

function escrever1(nome){
	console.log(nome);
};
function escrever2(nome){
	console.log(this.nome);
};
function escrever3(nomeGlobal_02){
	console.log(nomeGlobal_02);
};
function escrever4(nomeGlobal_02){
	console.log(this.nomeGlobal_02);
};

console.log('');
console.log('analise variavel global');
console.log(nome);
escrever1('Amalia');
escrever2('Amalia');
escrever3('Amalia');
escrever4('Amalia');

