import React, { useState, useEffect, useContext } from "react";
import Card from "../component/personajes";
import CardPlanetas from "../component/planetas";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid bg-light sticky-top">
			<nav className="navbar navbar-light mb-3 container">
				<Link className="col-2" to="/">
					<img
						className="img-fluid"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png"
					/>
				</Link>
				<div className="col-5">
					<div className="row">
						<Link to="/" className="col-6 text-dark">
							Home
						</Link>
						<Link to="/user" className="col-6 text-dark">
							Login / Register
						</Link>
					</div>
				</div>
				<div className="col-5">
					<div className="col-6 float-left d-none">
						<span>Roy Mora Mora</span>
					</div>
					<div className="col-6 float-left">
						<div className="dropdown">
							<button
								className="btn btn-dark dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Favorites <span className="badge badge-light m-2">{store.favorites.length}</span>
							</button>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
								{store.favorites.map((item, index) => {
									return (
										<div key={index} className="dropdown-item">
											<div className="row">
												<div className="col-9">{item.name}</div>
												<div className="col-2">
													<a
														className="badge badge-danger text-white"
														onClick={() => actions.deleteFavorite(index)}>
														<i className="far fa-trash-alt" />
													</a>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};
