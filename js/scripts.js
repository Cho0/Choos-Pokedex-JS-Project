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

	function showDetails(pokemon) {
		console.log(pokemonList)
	}
	
	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem,
		showDetails: showDetails,
	};	

	function addListItem(pokemon) {
		let repository = document.querySelector(".pokemon-list");
		let listitem = document.createElement("li");
		let button = document.createElement("button");
			button.innerText = pokemon.name;
			button.classList.add("button");
			listitem.appendChild(button);
			repository.appendChild(listitem);

		button.addEventListener("click", function(pokemon){
			showDetails(pokemon);

		})};

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
	pokemonRepository.addListItem(pokemon);
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