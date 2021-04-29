import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const User = () => {
	const { store, actions } = useContext(Context);
	const [mail, setMail] = useState("");
	const [password, setPassword] = useState("");

	const [mailCrear, setMailCrear] = useState("");
	const [passwordCrear, setPasswordCrear] = useState("");
	const [user, setUser] = useState("");

	const enviar = e => {
		e.preventDefault();
		const body = { mail: mail, password: password };
		console.log(body);
		fetch("https://3000-plum-cockroach-9onms0lp.ws-us04.gitpod.io/login", {
			method: "POST",
			body: JSON.stringify(body),
			headers: { "Content-Type": "application/json" }
		})
			.then(res => res.json())
			.then(data => {
				sessionStorage.setItem("my_token", data.token);
			})
			.catch(err => console.log(err));
	};
	const crear = e => {
		e.preventDefault();
		const body = { mail: mailCrear, password: passwordCrear, name: user };
		console.log(body);
		fetch("https://3000-plum-cockroach-9onms0lp.ws-us04.gitpod.io/user", {
			method: "POST",
			body: JSON.stringify(body),
			headers: { "Content-Type": "application/json" }
		})
			.then(res => res.json())
			.then(data => {
				sessionStorage.setItem("my_token", data.token);
			})
			.catch(err => console.log(err));
	};

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
						<form onSubmit={enviar}>
							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<span className="input-group-text" id="basic-addon1">
										<i className="fas fa-at" />
									</span>
								</div>
								<input
									id="mail"
									onChange={e => setMail(e.target.value)}
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
									onChange={e => setPassword(e.target.value)}
									id="password"
									name="password"
									className="form-control"
									placeholder="PASSWORD"
									aria-label="Username"
									aria-describedby="basic-addon1"
								/>
							</div>
							<div className="col-12 text-center">
								<button type="submit" className="btn btn-primary">
									Submit
								</button>
							</div>
						</form>
					</div>
					<div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
						<div className="col-12 text-center">
							<h2 className="col-12">Register</h2>
						</div>
						<form onSubmit={crear}>
							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<span className="input-group-text" id="basic-addon1">
										<i className="fas fa-at" />
									</span>
								</div>
								<input
									onChange={e => setMailCrear(e.target.value)}
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
									onChange={e => setUser(e.target.value)}
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
									onChange={e => setPasswordCrear(e.target.value)}
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
								<button type="submit" className="btn btn-primary">
									Crear
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
