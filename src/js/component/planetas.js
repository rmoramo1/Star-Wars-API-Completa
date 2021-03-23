import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardPlanetas = props => {
	const { store, actions } = useContext(Context);
	const { detalle, setDetalle } = useState();

	useEffect(
		() => {
			let detalle = actions.getPlanetDetail(props.url);
			console.log("royM", detalle);
		},
		[detalle]
	);

	return (
		<div className="col">
			<div className="card shadow my-3">
				<img src="http://placehold.it/500X300/" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">
						<strong>Name:</strong> {props.name}
					</h5>
					<p className="card-text">
						<strong>Diameter:</strong> {detalle ? detalle.diameter : ""}
					</p>
					<p className="card-text">
						<strong>Population:</strong> {detalle ? detalle.population : ""}
					</p>
					<p className="card-text">
						<strong>Terrain:</strong> {detalle ? detalle.terrain : ""}
					</p>
					<div className="row">
						<div className="col-6">
							<Link to="/single">
								<div className="btn btn-primary">Learn More</div>
							</Link>
						</div>
						<div className="col-6">
							<a href="#" className="btn btn-outline-warning">
								<i className="fas fa-heart" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
CardPlanetas.propTypes = {
	name: PropTypes.string,
	diameter: PropTypes.string,
	population: PropTypes.string,
	terrain: PropTypes.string,
	url: PropTypes.string
};
export default CardPlanetas;
