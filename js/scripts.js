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
	
	for (let i = 0; 
		i < pokemonList.length; 
		i++){
		document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")");	
	if (pokemonList[i].height > 1.5){
		document.write("-its a big one");
	}
	}

	