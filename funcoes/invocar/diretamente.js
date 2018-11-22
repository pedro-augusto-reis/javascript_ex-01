/* 
Anonymous functions are created at runtime. 
The function operator can be used anywhere that it's valid to use an expression.
*/

// > nao funciona se for utilizada antes da declaração
// > console.log(soma1(2,2)); 

var soma1 = function(a,b){
	return a+b;
};
console.log(soma1(2,3));

// > funcao anonima
// > pode ser utilizada em qualquer linha, pois ela é carregada antes de ser interpretada
console.log(soma2(2,4));
function soma2(a,b){
	return a+b;
};

/*
funcoes de primeira classe
*/

var produto = {nome: 'Sapato', preco: 150};

var formulaImpostoA = function(preco){
	return preco*0.1;
};
var formulaImpostoB = function(preco){
	return preco*0.3;
};

var calcularPreco = function(_produto, _formulaImposto){
	return _produto.preco + _formulaImposto(produto.preco);
}

console.log(calcularPreco(produto, formulaImpostoA));
console.log(calcularPreco(produto, formulaImpostoB));

var helloWorld = function(){
	return function helloWorld2(){
		return "Hello World";
	}
};

console.log(helloWorld);
console.log(helloWorld());
console.log(helloWorld()());
