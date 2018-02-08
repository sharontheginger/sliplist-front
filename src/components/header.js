import React, {Component} from 'react'

class Header extends Component {
	render() {
		return(
			<h1>welcome {this.props.locations}</h1>
		)
	}
}
export default Header
