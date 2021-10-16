import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { ControlledCarousel } from "../component/carousel";
import { ButtonBlack } from "../component/botoncategorias";
import { CardProduct } from "../component/cardproduct";

export const Home = () => (
	<div className="container-fluid content parent">
		<div className="carousel-productos seccion">
			<ControlledCarousel />
		</div>
		<br />
		<div />
		<div className="grupo-botones-categoria seccion">
			<ButtonBlack />
			<ButtonBlack />
			<ButtonBlack />
			<ButtonBlack />
			<ButtonBlack />
			<ButtonBlack />
		</div>
		<div className="grupo-botones-categoria seccion">
			<button /* onClick={() => actions.setShoppingCart(props.title)} */ className="boton boton-vertodo">
				VER TODO
			</button>
		</div>
		<br />
		<span className="titulo-seccion">
			<h4> DISEÑOS RECIENTES </h4>
		</span>
		<div className="productos-home seccion">
			<CardProduct />
			<CardProduct />
			<CardProduct />
			<CardProduct />
		</div>
		<br />
		<div className="carousel-taller seccion">
			<ControlledCarousel />
		</div>
		<br />
		{/* //alt+z para ordenar texto rapido// */}
		<div className="seccion">
			<span className="textos-simples">
				ASV es una marca joyeria de autor elaborada en plata, bronce y cobre. Diseño y Manufactura 100% nacional
				chilena, creada por Ada Schuler.
			</span>
		</div>
		<hr />
		<div className="seccion">
			<span className="textos-simples">
				<p>About Us</p>
				<p>Preguntas frecuentes</p>
				<p>Cuidados y mantenimiento</p>
				<p>Terminos y condiciones</p>
				<p>Cambios de productos</p>
				<p>Guia de tallas</p>
				<p>Contactanos</p>
			</span>
		</div>
		<br />
	</div>
);
