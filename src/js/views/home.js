import React from "react";
import Cards from "../component/cards";
import "../../styles/home.scss";

export const Home = () => {
	let personajes = [
		{ nombre: "Lucke", genero: "Masculino", Hair_Color: "macho", eye: "cafe" },
		{ nombre: "Princesa Leia", genero: "Femenino", Hair_Color: "Cafe", eye: "Cafes" },
		{ nombre: "han solo", genero: "Masculino", Hair_Color: "Cafe", eye: "negros" },
		{
			nombre: "Chubaca",
			genero: "Masculino",
			Hair_Color: "Cafe",
			eye: "cafe"
		}
	];
	return (
		<div className="row">
			{personajes.map((item, index) => {
				return (
					<div key={index} className="col">
						<Cards
							key={index}
							nombre={item.nombre}
							genero={item.genero}
							Hair_Color={item.Hair_Color}
							eye={item.eye}
						/>
					</div>
				);
			})}
		</div>
	);
};
