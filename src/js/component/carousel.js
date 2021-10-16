import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";

import carouselImage01 from "../../img/carousel/C1.jpeg";
import carouselImage02 from "../../img/carousel/C2.jpeg";
import carouselImage03 from "../../img/carousel/C3.jpeg";

import "../../styles/carousel.scss";

export function ControlledCarousel() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<div className="carousel">
			<Carousel activeIndex={index} onSelect={handleSelect}>
				<Carousel.Item>
					<img className="d-block w-100" src={carouselImage01} alt="First slide" />
					<Carousel.Caption>
						<h6>First slide label</h6>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={carouselImage02} alt="Second slide" />

					<Carousel.Caption>
						<h6>Second slide label</h6>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={carouselImage03} alt="Third slide" />

					<Carousel.Caption>
						<h6>Third slide label</h6>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
