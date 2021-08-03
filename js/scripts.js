let pokemonRepository = (function () {
	let pokemonList = [];
	let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";
	let modalContainer = document.querySelector(".modal-container");
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

	function showDetails(item) {
		loadDetails(item).then(function () {
		modalContainer.classList.add('show-modal');
		showModal(item.name, item.height, item.imageUrl);
		});	
			
	}

	function showModal(title, text, img) {
		modalContainer.innerHTML = "";
		let modal = document.createElement("div");
		modal.classList.add("modal");

		let closeButtonElement = document.createElement('button');
		closeButtonElement.classList.add('modal-close');
		closeButtonElement.innerText = 'Close';
		closeButtonElement.addEventListener('click', hideModal);

		let pokemonName = document.createElement('h1');
		pokemonName.innerText = title;

		let pokemonHeight = document.createElement('p');
		pokemonHeight.innerText = text;

		let frontImage = document.createElement("img"); 
		frontImage.src = img;
		
    modal.appendChild(closeButtonElement);
    modal.appendChild(pokemonName);
    modal.appendChild(pokemonHeight);
    modalContainer.appendChild(modal);
		modal.appendChild(frontImage);

    modalContainer.classList.add('show-modal');
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

	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem,
		showDetails: showDetails,
		loadList: loadList,
		loadDetails: loadDetails,
		hideModal: hideModal,
		showModal: showModal,
	};
})();

pokemonRepository.loadList().then(function () {
	pokemonRepository.getAll().forEach(function (pokemon) {
		pokemonRepository.addListItem(pokemon);
	});
});
