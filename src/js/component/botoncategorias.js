import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import "../../styles/home.scss";

export const ButtonBlack = props => {
	const { store, actions } = useContext(Context);

	const history = useHistory();

	return (
		<div>
			<button
				/* onClick={() => actions.setShoppingCart(props.title)} */ className="boton boton-negro boton-categorias">
				AROS
			</button>
		</div>
	);
};
