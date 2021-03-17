import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div>
			<div className="card">
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.nombre}</h5>
					<p className="card-text">{props.genero}</p>
					<p className="card-text">{props.Hair_Color}</p>
					<p className="card-text">{props.eye}</p>
					<a href="#" className="btn btn-primary">
						Learn More
					</a>
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	nombre: PropTypes.string,
	genero: PropTypes.string,
	Hair_Color: PropTypes.string,
	eye: PropTypes.string
};
export default Card;
