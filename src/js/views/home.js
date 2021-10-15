import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { ControlledCarousel } from "../component/carousel";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
		<div className="col-xs-10 col-sm-8 col-md-6">
			<ControlledCarousel />
		</div>
	</div>
);
