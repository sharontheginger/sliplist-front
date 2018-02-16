import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


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

	  handleSubmit () {
		  this.props.onSubmit(this.state.form)
		  console.log(this.state.form)
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
    return (

        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
			  name="email"
              value={this.state.form.email}
              onChange={this.handleChange.bind(this)}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.form.password}
              onChange={this.handleChange.bind(this)}
              type="password"
			  name="password"
            />
          </FormGroup>
          <Button
            block
			className="btn btn-primary"
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
