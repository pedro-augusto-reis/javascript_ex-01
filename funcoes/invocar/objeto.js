var pessoa = {
  nome: 'João',
  idade: 20,
  getIdade: function(){
    return this.idade;
  }
};

console.log(pessoa['idade']);
console.log(pessoa.idade);
console.log(pessoa.getIdade);
console.log(pessoa.getIdade());

var getIdade = function(){
	return this.idade;
}

var pessoa2 = {
	nome: 'Pedro',
	idade: 25,
	//referencia para a função da linha 14, não se utiliza o parênteses para não realizar a chamada da função
	getIdade: getIdade
};

console.log(pessoa2.getIdade());
