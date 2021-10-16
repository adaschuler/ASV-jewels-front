import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import "../../styles/cardproduct.scss";
import carouselImage01 from "../../img/carousel/C1.jpeg";

export const CardProduct = props => {
	const { store, actions } = useContext(Context);

	const history = useHistory();

	return (
		<div className="">
			<div className="ficha">
				<div className="ficha-body">
					<Link /* to={props.category + props.id} */ className="">
						<div>
							<p className="ficha-text">
								<img
									className={props.url}
									/* src= {props.img1 + props.indexlink + props.img2} */
									src={carouselImage01}
									width="150px"
									alt="Joyeria"
								/>
							</p>
						</div>
					</Link>

					<div>
						<h5 className="ficha-title">
							ANILLO GEOMETRICO CON PIEDRA
							{/* {props.title} */}
						</h5>
					</div>
					<div>
						<h5 className="ficha-title">
							$VALOR
							{/* {props.precio} */}
						</h5>
					</div>
					<div className="center">
						<button /* onClick={() => actions.setShoppingCart(props.title)} */ className="boton-compra">
							VER MAS
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

CardProduct.propTypes = {
	url: PropTypes.string,
	title: PropTypes.string,
	id: PropTypes.object,
	category: PropTypes.string,
	img1: PropTypes.string,
	indexlink: PropTypes.string,
	img2: PropTypes.string
};
