import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return(
			<footer className="footer">
				<h5> productions by Learn Academy Alumni </h5>
				<h1>Environment {process.env.NODE_ENV}</h1>
			</footer>
		)
	}
}
export default Footer;
