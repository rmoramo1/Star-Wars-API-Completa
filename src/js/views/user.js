import React, { useState, useEffect, useContext } from "react";
import Card from "../component/personajes";
import CardPlanetas from "../component/planetas";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const User = () => {
	return (
		<div className="container mt-5">
			<div className="col-6 mx-auto rounded shadow py-4">
				<nav className="col-12 text-center">
					<div className="nav nav-tabs" id="nav-tab" role="tablist">
						<a
							className="active col-6"
							id="nav-home-tab"
							data-toggle="tab"
							href="#nav-home"
							role="tab"
							aria-controls="nav-home"
							aria-selected="true">
							Login
						</a>
						<a
							className="col-6"
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
									@
								</span>
							</div>
							<input
								type="text"
								className="form-control"
								placeholder="Username"
								aria-label="Username"
								aria-describedby="basic-addon1"
							/>
						</div>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="basic-addon1">
									PASS
								</span>
							</div>
							<input
								type="password"
								className="form-control"
								placeholder="PASSWORD"
								aria-label="Username"
								aria-describedby="basic-addon1"
							/>
						</div>
					</div>
					<div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
						...2
					</div>
				</div>
			</div>
		</div>
	);
};
