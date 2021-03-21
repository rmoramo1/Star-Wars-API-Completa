import React, { useState, useEffect, useContext } from "react";
import Card from "../component/personajes";
import CardPlanetas from "../component/planetas";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	/*let personajes = [
		{ nombre: "Lucke", genero: "Masculino", Hair_Color: "macho", eye: "cafe" },
		{ nombre: "Princesa Leia", genero: "Femenino", Hair_Color: "Cafe", eye: "Cafes" },
		{ nombre: "han solo", genero: "Masculino", Hair_Color: "Cafe", eye: "negros" },
		{ nombre: "Obi One", genero: "Masculino", Hair_Color: "Cafe", eye: "negros" },
		{ nombre: "Chubaca", genero: "Masculino", Hair_Color: "Cafe", eye: "cafe" }
	];
	let planetas = [
		{ planeta: "marte", terrain: "Marciano", poblacion: "100000" },
		{ planeta: "Jupiter", terrain: "Jupiteriano", poblacion: "13454000" },
		{ planeta: "Venus", terrain: "Veneciano", poblacion: "343400" },
		{ planeta: "Saturno", terrain: "Saturniano", poblacion: "103434" },
		{ planeta: "Pluton", terrain: "Plutoniano", poblacion: "3578647" }
    ];*/

	return (
		<div className="container">
			<div className="col-12">
				<h1 className="text-danger">Personajes</h1>
			</div>
			<div className="row overX">
				{store.personajes.map((item, index) => {
					return (
						<div key={index} className="col-4 ">
							<Card
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
			<div className="col-12 mt-5">
				<h1 className="text-danger">Planetas</h1>
			</div>
			<div className="row overX">
				{store.planetas.map((item, index) => {
					return (
						<div key={index} className="col-4 ">
							<CardPlanetas
								key={index}
								url={item.url}
								name={item.name}
								diameter={item.diameter}
								population={item.population}
								terrain={item.terrain}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};
