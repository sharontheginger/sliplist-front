import React, { Component } from "react";

import { Button, FormGroup, FormControl, ControlLabel, Col } from "react-bootstrap";


export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {
			email: "",
			password: ""
			}
		}
	}

	  validateForm() {
		  	return this.state.email.length > 0 && this.state.password.length > 0;
		}

	  handleChange (event) {
			const formState = Object.assign({}, this.state.form)
			formState[event.target.name] = event.target.value
			this.setState({form: formState})
		}

	  handleSubmit(e) {
		  	e.preventDefault()

			const { onSubmit } = this.props
			const { form } = this.state

			if(onSubmit) {
				onSubmit(form)
			} else {
			console.log("no onSubmit function was passed to signin form");
			}
	  	}


	  errorsFor(attribute){
        var errorString = ""
        if(this.props.errors){
            if(this.props.errors.validations) {
                const errors = this.props.errors.filter(error => error.param === attribute )
                if(errors){
                    errorString = errors.map(error => error.msg ).join(", ")
                }
            }
        }
        return errorString === "" ? null : errorString
    }
	render() {
		const { form } = this.state
		const { email, password } = form

	    return (
	        <form onSubmit={this.handleSubmit.bind(this)}>

	    		<FormGroup controlId="email" bsSize="large">
	            	<ControlLabel>
						Email
					</ControlLabel>
	            	<FormControl
	              		autoFocus
	              		type="email"
				  		placeholder="example@example.com"
				  		name="email"
	              		value={email}
	              		onChange={this.handleChange.bind(this)}
	            	/>
	          	</FormGroup>

	          	<FormGroup controlId="password" bsSize="large">
	            	<ControlLabel>
						Password
					</ControlLabel>
	            	<FormControl
						value={password}
						onChange={this.handleChange.bind(this)}
						placeholder="password"
						type="password"
						name="password"
	            	/>
	          	</FormGroup>

	          	<Button
					className="btn btn-success"
		            bsSize="large"
		            type="submit"
					onClick={this.handleSubmit.bind(this)}
	          	>
	            	Login
	          	</Button>
	        </form>
    	);
	}

}
