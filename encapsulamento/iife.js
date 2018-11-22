// immediately-invoked function expression

var counter = (function(){
	var _value = 0; // _ e uma convensao para tudo que for privado
	var _add = function(){
		return ++_value;
	};
	var _reset = function(){
		_value = 0;
	};
	return{
		add: _add,
		reset: _reset
	};
})();

console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
counter.reset();
console.log(counter.add());