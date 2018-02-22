import React, { Component } from 'react';
import {
	Carousel
} from 'react-bootstrap'

class CarouselTop extends Component {
	render() {
		return(

			        <Carousel>
					<Carousel.Item>
						<img src="https://images.unsplash.com/photo-1513002277650-6deb8404a2cd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=440f1faab63bf310ab154f63fb74d06d&auto=format&fit=crop&w=1051&q=80" alt="bunch of boats in a place that looks like europe"/>
						<Carousel.Caption>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img src="https://images.unsplash.com/photo-1499980565274-8a78d85da1a8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e977e37414a29ce67852f04ff1bcf1e4&auto=format&fit=crop&w=967&q=80" alt="more boats"/>
						<Carousel.Caption>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img src="https://images.unsplash.com/photo-1516754982724-879e393bb556?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0149c65e2fbfe2e1dfe4be076ba553ce&auto=format&fit=crop&w=1189&q=80" alt="even more boats"/>
						<Carousel.Caption>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>

		)
	}
}
export default CarouselTop
