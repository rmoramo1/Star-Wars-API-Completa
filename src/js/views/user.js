import React, { useState, useEffect, useContext } from "react";
import Card from "../component/personajes";
import CardPlanetas from "../component/planetas";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const User = () => {
	return (
		<div className="container mt-5">
			<div className="col-6 mx-auto rounded shadow py-4 bg-secondary text-white">
				<nav className="col-12 text-center">
					<div className="nav nav-tabs" id="nav-tab" role="tablist">
						<a
							className="active col-6 text-white"
							id="nav-home-tab"
							data-toggle="tab"
							href="#nav-home"
							role="tab"
							aria-controls="nav-home"
							aria-selected="true">
							Login
						</a>
						<a
							className="col-6 text-white"
							id="nav-profile-tab"
							data-toggle="tab"
							href="#nav-profile"
							role="tab"
							aria-controls="nav-profile"
							aria-selected="false">
							Register
						</a>
					</div>
				</nav>
				<div className="tab-content" id="nav-tabContent">
					<div
						className="tab-pane fade show active"
						id="nav-home"
						role="tabpanel"
						aria-labelledby="nav-home-tab">
						<div className="col-12 text-center">
							<h2 className="col-12">LOGIN</h2>
						</div>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="basic-addon1">
									<i className="fas fa-at" />
								</span>
							</div>
							<input
								id="mail"
								name="mail"
								type="text"
								className="form-control"
								placeholder="Mail"
								aria-label="Mail"
								aria-describedby="basic-addon1"
							/>
						</div>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="basic-addon1">
									<i className="fas fa-key" />
								</span>
							</div>
							<input
								type="password"
								id="password"
								name="password"
								className="form-control"
								placeholder="PASSWORD"
								aria-label="Username"
								aria-describedby="basic-addon1"
							/>
						</div>
						<div className="col-12 text-center">
							<a className="btn btn-dark">LOGIN</a>
						</div>
					</div>
					<div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
						<div className="col-12 text-center">
							<h2 className="col-12">Register</h2>
						</div>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="basic-addon1">
									<i className="fas fa-at" />
								</span>
							</div>
							<input
								id="registerMail"
								name="registerMail"
								type="text"
								className="form-control"
								placeholder="Mail"
								aria-label="Mail"
								aria-describedby="basic-addon1"
							/>
						</div>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="basic-addon1">
									<i className="far fa-user" />
								</span>
							</div>
							<input
								id="username"
								name="username"
								type="text"
								className="form-control"
								placeholder="username"
								aria-label="username"
								aria-describedby="basic-addon1"
							/>
						</div>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="basic-addon1">
									<i className="fas fa-key" />
								</span>
							</div>
							<input
								id="registerPassword"
								name="registerPassword"
								type="password"
								className="form-control"
								placeholder="Password"
								aria-label="password"
								aria-describedby="basic-addon1"
							/>
						</div>
						<div className="col-12 text-center">
							<a className="btn btn-dark">SUBMIT</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
