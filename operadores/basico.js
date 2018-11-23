/* 
Se x é Number e y é String composta unicamente por número, 
  a comparação será feita da seguinte forma: x == ToNumber(y). 
Como o resultado de ToNumber('10') é 10, o retorno é true.
*/
console.log(10 == '10');

/*
Comparando o Number 10 com um objeto que possui valor 10.
x == ToPrimitive(y), que utiliza a operação valueOf, ou toString se não
  existir valueOf, do objeto para compará-lo com um Number.
*/
console.log(10 == new Number(10));

// === e !== não compara tipos diferentes
console.log(10 === '10');

/*
Javascript não possui o "equal" do Java.
*/
var x = {};
var y = {};
console.log(x == y);
console.log(x === y);

/*
|| e && utiliza de short circuit e analisa o tipo booleano,
  retornando o valor.
0 = false e 2 = true ->  2
1 = true e 2 = true -> 1
*/
console.log(0 || 2);
console.log(1 || 2);

/*
Exemplo de utilização
*/
var generateSerial = function(max){
	// if(!max) {
	// 	max = 1000;
	// }
	max = max || 1000;
	return Math.floor(Math.random()*max);
};
console.log(generateSerial(1000));
console.log(generateSerial());