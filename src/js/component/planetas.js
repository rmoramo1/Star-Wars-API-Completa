import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CardPlanetas = props => {
	return (
		<div className="col">
			<div className="card">
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">
						<strong>Planeta:</strong> {props.planeta}
					</h5>
					<p className="card-text">
						<strong>Terrain:</strong> {props.terrain}
					</p>
					<p className="card-text">
						<strong>Población:</strong> {props.poblacion}
					</p>
					<div className="row">
						<div className="col-6">
							<Link to="/single">
								<a href="#" className="btn btn-primary">
									Learn More
								</a>
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
	planeta: PropTypes.string,
	terrain: PropTypes.string,
	poblacion: PropTypes.number
};
export default CardPlanetas;
