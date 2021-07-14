let pokemonList = [
	{name: "Bulbasaur", 
	type: ["grass", "poison"], 
	height: 0.7}, 

	{name: "Ivysaur", 
	type: ["grass", "poison"], 
	height: 1},

	{name: "Venusaur", 
	type: ["grass", "poison"], 
	height: 2},

	{name: "Charmander", 
	type: ["fire"], 
	height: 0.6},

	{name: "Charmeleon", 
	type: ["fire"], 
	height: 1.1},

	{name: "Charizard",
	type: ["fire", "flying"], 
	height: 1.7}
	]
	
/* for (let i = 0; i < pokemonList.length; i++){
	document.write(
		pokemonList[i].name + " (height: " + pokemonList[i].height + ")"
	);	
	if (pokemonList[i].height > 1.5) {
		document.write("-its a big one");
	}
} */

function printArrayDetails(list){
	for (let i = 0; i < list.length; i++){
		document.write("<p>" + list[i].name + "<p>")
		console.log(list[i].name);
	}
}	

printArrayDetails(pokemonList);




// calculator thing // 



function add (num1, num2){
 return num1 + num2;
};

function subtract (num1, num2){
  return num1 - num2;
};

function multiply (num1, num2){
 return num1 * num2;
};

function divide (num1, num2){
	if(num2 === 0){
		return "Not Allowed"
	}else{
		return num1 / num2;
	}
}
