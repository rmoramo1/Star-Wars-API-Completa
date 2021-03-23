import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardPlanetas = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="col">
			<div className="card shadow my-3">
				<img
					src="https://www.lafinestradigital.com/wp-content/uploads/2011/08/planetacoruscant.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">
						<strong>Name:</strong> {props.name}
					</h5>
					<p className="card-text">
						<strong>Diameter:</strong> {props.diameter}
					</p>
					<p className="card-text">
						<strong>Population:</strong> {props.population}
					</p>
					<p className="card-text">
						<strong>Terrain:</strong> {props.terrain}
					</p>
					<div className="row">
						<div className="col-6">
							<Link to="/single">
								<div className="btn btn-primary">Learn More</div>
							</Link>
						</div>
						<div className="col-6">
							<Link onClick={() => actions.addFavorite(props.name)}>
								<div className="btn btn-outline-warning">
									<i className="fas fa-heart" />
								</div>
							</Link>
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
