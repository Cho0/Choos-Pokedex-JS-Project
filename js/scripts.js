let pokemonRepository = (function () {
	let pokemonList = [];
	let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";

	function add(pokemon) {
		if (
			typeof pokemon === "object" &&
			"name" in pokemon
		) {
			pokemonList.push(pokemon);
		} else {
			console.log("pokemon is not correct");
		}
	}

	function getAll() {
		return pokemonList;
	}

	function addListItem(pokemon) {
		let pokemonList = document.querySelector(".pokemon-list");
		let listpokemon = document.createElement("li");
		let button = document.createElement("button");
		button.innerText = pokemon.name;
		button.classList.add("button-class");
		listpokemon.appendChild(button);
		pokemonList.appendChild(listpokemon);

		button.addEventListener("click", function (event) {
			showDetails(pokemon);
		});
	}

	function loadList() {
		return fetch(apiUrl).then(function (response) {
			return response.json();
		}).then(function (json) {
			json.results.forEach(function (item) {
				let pokemon = {
					name: item.name,
					detailsUrl: item.url
				};
				add(pokemon);
			});
		}).catch(function (e) {
			console.error(e);
		})
	}

	function loadDetails(item) {
		let url = item.detailsUrl;
		return fetch(url).then(function (response) {
			return response.json();
		}).then(function (details) {
			item.imageUrl = details.sprites.front_default;
			item.height = details.height;
			item.types = details.types;
		}).catch(function (e) {
			console.error(e);
		});
	}

	let modalButton = document.querySelector(".button-class");
	let modalContainer = document.querySelector(".modal-container");

	modalButton.addEventListener("click", function() {
		modalContainer.classList.add(".show-modal")
	});


	function showDetails(item) {
		loadDetails(item).then(function () {
			console.log(item);
		});
	}

	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem,
		showDetails: showDetails,
		loadList: loadList,
		loadDetails: loadDetails,
	};

})();


pokemonRepository.loadList().then(function () {
	pokemonRepository.getAll().forEach(function (pokemon) {
		pokemonRepository.addListItem(pokemon);
	});
});






/* for (let i = 0; i < pokemonList.length; i++){
	document.write(
		pokemonList[i].name + " (height: " + pokemonList[i].height + ")"
	);
	if (pokemonList[i].height > 1.5) {
		document.write("-its a big one");
	}
} */

