/*
toda função possui os métodos call() e apply()
*/
var idade = 30;

var getIdade = function(){
	var idade = 31;
	return this.idade;
};

var getIdade2 = function(extra1, extra2){
	var idade = 33;
	return this.idade + extra1 + extra2;
};

var getIdade3 = function(extra){
	console.log(arguments);
	return this.idade + extra;
};

var pessoa = {
	nome: 'Pedro',
	idade: 29,
	getIdade: getIdade,
	getIdade2: getIdade2,
	getIdade3: getIdade3
};

console.log(getIdade()); // undefined, pois o this olha para o scopo global;
console.log(pessoa.getIdade());
console.log(getIdade.call(pessoa));
console.log(getIdade.apply(pessoa));

console.log('');

console.log(pessoa.getIdade2(2,1));
console.log(getIdade2.call(pessoa,2,1));
console.log(getIdade2.apply(pessoa,[2,1])); // obrigatoriamente é um array

console.log('');

console.log(pessoa.getIdade3(2, 1, 3, 4, 5, 6));
console.log(getIdade3.call(pessoa, 2, 1, 3, 4, 5, 6));
console.log(getIdade3.apply(pessoa,[2, 1, 3, 4, 5, 6]));
