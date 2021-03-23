const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			planetas: [],

			personajes: [
				{ nombre: "Lucke", genero: "Masculino", Hair_Color: "macho", eye: "cafe" },
				{ nombre: "Princesa Leia", genero: "Femenino", Hair_Color: "Cafe", eye: "Cafes" },
				{ nombre: "han solo", genero: "Masculino", Hair_Color: "Cafe", eye: "negros" },
				{ nombre: "Obi One", genero: "Masculino", Hair_Color: "Cafe", eye: "negros" },
				{ nombre: "Chubaca", genero: "Masculino", Hair_Color: "Cafe", eye: "cafe" }
			]
			/*
			planetas: [
				{ planeta: "marte", terrain: "Marciano", poblacion: "100000" },
				{ planeta: "Jupiter", terrain: "Jupiteriano", poblacion: "13454000" },
				{ planeta: "Venus", terrain: "Veneciano", poblacion: "343400" },
				{ planeta: "Saturno", terrain: "Saturniano", poblacion: "103434" },
				{ planeta: "Pluton", terrain: "Plutoniano", poblacion: "3578647" }
			]*/
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				const url = "https://www.swapi.tech/api/planets";
				fetch(url)
					.then(response => response.json())
					.then(result => {
						console.log("****", result);
						setStore({
							planetas: result.results
						});
					})

					.catch(error => console.log("error", error));
			},

			/*getPlanetDetail: url => {
				fetch(url)
					.then(response => response.json())
					.then(result => {
						let detalle = result.result;
						console.log("****", detalle.properties);
						return detalle.properties;
					})

					.catch(error => console.log("error", error));
            },*/

			getPlanetDetail: url => {
				let resultado = fetch(url)
					.then(response => response.json())
					.then(result => {
						let detalle = result.result;
						return detalle.properties;
					})
					.catch(error => console.log("error", error));
				return resultado;
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
				setStore({ personajes: personajes });
				setStore({ planetas: planetas });
			}
		}
	};
};

export default getState;
