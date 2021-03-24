import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="col">
			<div className="card shadow my-3">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTotAKINFft6S0Ylk5ri9nKKPiHIN_Y4NVrhA&usqp=CAU"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">
						<strong>Personaje:</strong> {props.name}
					</h5>
					<p className="card-text">
						<strong>Genero:</strong> {props.gender}
					</p>
					<p className="card-text">
						<strong>Color de Pelo:</strong> {props.hair_color}
					</p>
					<p className="card-text">
						<strong>Color de ojos:</strong> {props.eye_color}
					</p>
					<div className="row">
						<div className="col-6">
							<Link to={`/single/${props.id}`}>
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
Card.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	hair_color: PropTypes.string,
	eye_color: PropTypes.string,
	id: PropTypes.number,
	url: PropTypes.string
};
export default Card;
