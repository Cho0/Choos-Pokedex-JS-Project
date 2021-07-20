let pokemonRepository = (function () {
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
		];
	
	function add(pokemon) {
		pokemonList.push(pokemon);
	}

	function getAll() {
		return pokemonList;
	}
	
	return {
		add: add,
		getAll: getAll
	};	
})();		

/* for (let i = 0; i < pokemonList.length; i++){
	document.write(
		pokemonList[i].name + " (height: " + pokemonList[i].height + ")"
	);	
	if (pokemonList[i].height > 1.5) {
		document.write("-its a big one");
	}
} */


console.log(pokemonRepository.getAll() );

pokemonRepository.getAll().forEach(function(pokemon){
	document.write(pokemon.name + " ")
});


/*
function printArrayDetails(list){
	for (let i = 0; i < list.length; i++){
		document.write("<p>" + list[i].name + "<p>")
		console.log(list[i].name);
	}
}	

printArrayDetails(pokemonList);
*/