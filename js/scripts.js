let pokemonRepository = (function () {
	let pokemonList = [];
	let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";
	let modalContainer = document.querySelector(".modal-content");

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
		listpokemon.classList.add("group-list-item");
		button.innerText = pokemon.name;

		button.classList.add("btn");
		button.classList.add("btn-primary");
		button.type = "button"

		button.setAttribute("data-target", "#pokemonModal");
		button.setAttribute("data-toggle", "modal")

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
			item.name = details.name;
			item.types = details.types;
		}).catch(function (e) {
			console.error(e);
		});
	}

	function showDetails(item) {
		loadDetails(item).then(function () {
			showModal(item);
		});			
	}

	function showModal(item) {
		let modalBody = $(".modal-body");
		let modalTitle = $(".modal-title");

		modalTitle.empty();
		modalBody.empty();

		let pokemonHeight = $("<p>" + "Height:" + " " + item.height + "</p>");
		pokemonHeight.addClass("pokemon-height")
		let frontImage = $("<img>");
		frontImage.attr("src", item.imageUrl);
		frontImage.addClass("front-image")
//type
		let readableType = item.types.map((type) => {
			return type.type.name;
		})
		let typeString = readableType.join(', ');
		
		modalTitle.append(item.name + ":" + " " + typeString);
		modalBody.append(pokemonHeight);
		modalBody.append(frontImage);
	}

	//hiding the Modal
	function hideModal() {
		modalContainer.classList.remove("show-modal")
	}

	window.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && modalContainer.classList.contains("show-modal")) {
			hideModal();
		}
	});
	modalContainer.addEventListener("click", (e) => {
		let target = e.target;
		if (target === modalContainer) {
			hideModal();
		}
	});

	function showSearch (){
		let innerDot = document.querySelector(".ball-button");
		let searchBar = document.querySelector(".search-bar")

		innerDot.addEventListener("click", function() {
			searchBar.classList.remove(".search-bar")
		})
	}

	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem,
		showDetails: showDetails,
		loadList: loadList,
		loadDetails: loadDetails,
		hideModal: hideModal,
		showModal: showModal,
		showSearch: showSearch,
	};
})();

pokemonRepository.loadList().then(function () {
	pokemonRepository.getAll().forEach(function (pokemon) {
		pokemonRepository.addListItem(pokemon);
	});
});

  
