import React, { Component } from 'react';
import {
	Carousel
} from 'react-bootstrap'

class CarouselTop extends Component {
	render() {
		return(
			<div>
			<div>
			        <Carousel>
					<Carousel.Item>
						<img width={900} height={500} alt="900x500" src="https://images.unsplash.com/photo-1513002277650-6deb8404a2cd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=440f1faab63bf310ab154f63fb74d06d&auto=format&fit=crop&w=1051&q=80" height="900px" width="500px"/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img width={900} height={500} alt="900x500" src="https://images.unsplash.com/photo-1499980565274-8a78d85da1a8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e977e37414a29ce67852f04ff1bcf1e4&auto=format&fit=crop&w=967&q=80" height="900px" width="500px" />
						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img width={900} height={500} alt="900x500" src="https://images.unsplash.com/photo-1516754982724-879e393bb556?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0149c65e2fbfe2e1dfe4be076ba553ce&auto=format&fit=crop&w=1189&q=80"/>
						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
				</div>
			        </div>
		)
	}
}
export default CarouselTop
