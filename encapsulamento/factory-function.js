var createCounter = function(){
	var value = 0;
	return{ // ira expor para o publico
		add: function(){
			return ++value;
		}
	};
};

// console.log(counter.value); 
// console.log(counter.value());

var counter = createCounter();
console.log(counter.value);
console.log(counter.add());