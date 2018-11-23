/*
for, if, else, continue, while, switch, break, throw, try e catch
*/

var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et odio ex. Nulla in consequat risus. Donec sit amet rhoncus ipsum. In pharetra odio nibh, at dignissim arcu eleifend in. Quisque eu dapibus magna. Curabitur vestibulum facilisis libero vitae posuere. Vivamus interdum dictum risus sit amet fringilla. Suspendisse potenti. Praesent aliquam orci porta, viverra ipsum eleifend, ornare dui. Suspendisse condimentum ultricies lectus et rutrum. Sed rhoncus odio lorem, maximus lobortis sapien cursus a. Morbi pretium, metus sed bibendum pretium, ex nunc placerat risus, sed sodales felis nulla eu elit. Proin tincidunt nunc nunc, quis bibendum lacus bibendum nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin et condimentum enim, sed auctor felis.";

var toHackerCase1 = function(text){
	for(var i = 0; i < text.length; i++){
		console.log(text.charAt(i));
	}
};

var toHackerCase2 = function(text){
	var hackerTextArray = [];
	for(var i = 0; i < text.length; i++){
		if(text.charAt(i) === "o"){
			hackerTextArray.push(0);
		} else if(text.charAt(i) === "l"){
			hackerTextArray.push(1);
		} else if(text.charAt(i) === "e"){
			hackerTextArray.push(3);
		} else if(text.charAt(i) === "a"){
			hackerTextArray.push(4);
		} else if(text.charAt(i) === "s"){
			hackerTextArray.push(5);
		} else if(text.charAt(i) === "t"){
			hackerTextArray.push(7);
		} else{
			hackerTextArray.push(text.charAt(i));
		}
	}
	return hackerTextArray.join("");
};

var toHackerCase3 = function(text){
	var hackerTextArray = [];
	for(var i = 0; i < text.length; i++){
		if(text.charAt(i) === "o"){
			hackerTextArray.push(0);
			continue;
		} 
		if(text.charAt(i) === "l"){
			hackerTextArray.push(1);
			continue;
		} 
		if(text.charAt(i) === "e"){
			hackerTextArray.push(3);
			continue;
		} 
		if(text.charAt(i) === "a"){
			hackerTextArray.push(4);
			continue;
		} 
		if(text.charAt(i) === "s"){
			hackerTextArray.push(5);
			continue;
		} 
		if(text.charAt(i) === "t"){
			hackerTextArray.push(7);
			continue;
		} 
		hackerTextArray.push(text.charAt(i));
	}
	return hackerTextArray.join("");
};

var toHackerCase4 = function(text){
	var hackerTextArray = [];
	for(var i = 0; i < text.length; i++){
		switch(text.charAt(i)){
			case "o":
			  hackerTextArray.push(0);
			  break;
			case "l":
			  hackerTextArray.push(1);
			  break;
			case "e":
			  hackerTextArray.push(3);
			  break;
			case "a":
			  hackerTextArray.push(4);
			  break;
			case "s":
			  hackerTextArray.push(5);
			  break;
			case "t":
			  hackerTextArray.push(7);
			  break;
			default:
			  hackerTextArray.push(text.charAt(i));
		}
	}
	return hackerTextArray.join("");
};

var toHackerCase5 = function(text){
	var hackerTextArray = [];
	var i = 0;
	while(i < text.length){
		switch(text.charAt(i)){
			case "o":
			  hackerTextArray.push(0);
			  break;
			case "l":
			  hackerTextArray.push(1);
			  break;
			case "e":
			  hackerTextArray.push(3);
			  break;
			case "a":
			  hackerTextArray.push(4);
			  break;
			case "s":
			  hackerTextArray.push(5);
			  break;
			case "t":
			  hackerTextArray.push(7);
			  break;
			default:
			  hackerTextArray.push(text.charAt(i));
		}
		i++;
	}
	return hackerTextArray.join("");
};

var HackerTextError = function(message){
	this.message = message;
	this.name = "HackerTextError";
};

var toHackerCase6 = function(text){
	if (!text) throw new HackerTextError("Invalid text.");
	if (typeof text !== "string") throw new HackerTextError("Invalid type.")
	var hackerTextArray = [];
	var i = 0;
	while(i < text.length){
		switch(text.charAt(i)){
			case "o":
			  hackerTextArray.push(0);
			  break;
			case "l":
			  hackerTextArray.push(1);
			  break;
			case "e":
			  hackerTextArray.push(3);
			  break;
			case "a":
			  hackerTextArray.push(4);
			  break;
			case "s":
			  hackerTextArray.push(5);
			  break;
			case "t":
			  hackerTextArray.push(7);
			  break;
			default:
			  hackerTextArray.push(text.charAt(i));
		}
		i++;
	}
	return hackerTextArray.join("");
};

// toHackerCase1(text);
// console.log(toHackerCase2(text));
// console.log(toHackerCase3(text));
// console.log(toHackerCase4(text));
// console.log(toHackerCase5(text));
try{
	console.log(toHackerCase6(10));
}
catch(e){
	console.log("Error: " + e.name + " - " + e.message);
}