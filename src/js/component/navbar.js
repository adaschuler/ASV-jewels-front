import React from "react";
import { Link } from "react-router-dom";

import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="barra-superior">
			<div className="nav-div container-fluid">
				<div className="nav-header">
					<br />
					<span className="info">ENVIO GRATUITO PARA COMPRAS DESDE 55.000</span>
				</div>
				<div className="nav-inferior">
					<div>MENU</div>
					<div>
						<Link to="/">
							<span className="">LOGO</span>
						</Link>
					</div>
					<div>
						<Link to="/demo">
							<button className="btn btn-primary">Check the Context in action</button>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};
