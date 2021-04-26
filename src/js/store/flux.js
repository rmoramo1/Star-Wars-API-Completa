const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planetas: [],
			personajes: [],
			user: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadPersonas: async () => {
				const url = "https://3000-amaranth-constrictor-4nsnwjpl.ws-us03.gitpod.io/personajes";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ personajes: results });
			},
			loadPlanets: async () => {
				const url = "https://3000-amaranth-constrictor-4nsnwjpl.ws-us03.gitpod.io/planetas";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ planetas: results });
			},
			logUser: async () => {
				const url = "https://3000-amaranth-constrictor-4nsnwjpl.ws-us03.gitpod.io/user";
				const response = await fetch(url);
				const results = await response.json();
				console.log(results);
				setStore({ user: results });
				const store = getStore();
				store.user.map(each => {
					console.log(each.name);
				});
			},
			addFavorite: name => {
				const store = getStore();
				let count = 0;
				store.favorites.map(each => {
					if (each.name == name) {
						count = 1;
					}
				});
				if (count == 0) {
					setStore({
						favorites: [
							...store.favorites,
							{
								name: name
							}
						]
					});
				}
			},
			deleteFavorite: id => {
				const store = getStore();
				const newFavorites = store.favorites.filter((item, i) => i !== id);
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;
