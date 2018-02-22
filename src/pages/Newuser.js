
import React, { Component } from 'react';
import {
  Button,
  Row,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Alert
} from 'react-bootstrap'


class Newuser extends Component {
	constructor(props){
		super(props)

		this.state = {
			form: {
				firstname: '',
				lastname: '',
				email: '',
				password: '',
				phone: ''
			}
		}
	}

	handleChange(e){
		const { form } = this.state

		form[e.target.name] = e.target.value

		this.setState({form: form})
	}

	handleSubmit() {
	  const { onSubmit } = this.props
	  const { form } = this.state

	  if(onSubmit) {
	    onSubmit(form)
	  } else {
	    console.log("no onSubmit function provided");
	  }
	}

	errorsFor(attribute){
	  var errorString = ""
	  if(this.props.errors){
	    const errors = this.props.errors.filter(error => error.param === attribute )
	    if(errors){
	      errorString = errors.map(error => error.msg ).join(", ")
		    }
		  }
	  console.log(errorString);
	  return errorString === "" ? null : errorString
	}

	render() {
      return (
		  <form >

		  <Row>

            {this.props.errors &&
              <Alert bsStyle="danger">
                Please check the form and try again.
              </Alert>
            }

</Row>

<Row>

            <FormGroup
			  bsSize="large"
              id="firstname-form-group"
              validationState={this.errorsFor('firstname') && 'error'}>
              <ControlLabel id="firstname">First Name</ControlLabel>
              <FormControl
		           type="string"
		           name="firstname"
               placeholder='First Name'
		           onChange={this.handleChange.bind(this)}
	  		       value={this.state.form.firstname}
 		  	      />
              {this.errorsFor('firstname') &&
                <HelpBlock id="firstname-help-block">{this.errorsFor('firstname')}</HelpBlock>
              }
            </FormGroup>

</Row>

<Row>

            <FormGroup
			bsSize="large"
              id="lastname-form-group"
              validationState={this.errorsFor('lastname') && 'error'}>
              <ControlLabel id="lastname">Last Name</ControlLabel>
      			  <FormControl
        			  	type="string"
        			  	name="lastname"
                		placeholder='Last Name'
        			  	onChange={this.handleChange.bind(this)}
          	  			value={this.state.form.lastname}
                />
              {this.errorsFor('lastname') &&
                  <HelpBlock id="lastname-help-block">{this.errorsFor('lastname')}</HelpBlock>
                }
            </FormGroup>

</Row>

<Row>

            <FormGroup
			bsSize="large"
              id="email-form-group"
              validationState={this.errorsFor('email') && 'error'}>
              <ControlLabel id="email">Email</ControlLabel>
    			  <FormControl
      			  type="string"
      			  name="email"
	              placeholder='example@example.com'
      			  onChange={this.handleChange.bind(this)}
        	  	value={this.state.form.email}
              />
            {this.errorsFor('email') &&
                <HelpBlock id="email-help-block">{this.errorsFor('email')}</HelpBlock>
              }
            </FormGroup>

</Row>

<Row>

            <FormGroup
			bsSize="large"
              id="password-form-group"
              validationState={this.errorsFor('password') && 'error'}>
              <ControlLabel id="password">Password</ControlLabel>
    			  <FormControl
      			  type="password"
      			  name="password"
              placeholder='Password'
      			  onChange={this.handleChange.bind(this)}
        	  	value={this.state.form.password}
              />
            {this.errorsFor('password') &&
                <HelpBlock id="password-help-block">{this.errorsFor('password')}</HelpBlock>
              }
            </FormGroup>

</Row>

<Row>

            <FormGroup
			bsSize="large"
              id="phone-form-group"
              validationState={this.errorsFor('phone') && 'error'}>
              <ControlLabel id="phone">Phone</ControlLabel>
        			  <FormControl
          			  type="string"
          			  name="phone"
                  placeholder='619-555-1212'
          			  onChange={this.handleChange.bind(this)}
            	  	value={this.state.form.phone}
                  />
                {this.errorsFor('phone') &&
                    <HelpBlock id="phone-help-block">{this.errorsFor('phone')}</HelpBlock>
                  }
                </FormGroup>

</Row>

<Row>

            <Button className="btn btn-success btn btn-lg btn-default btn-block"
              id="submit"
              onClick={this.handleSubmit.bind(this)}>
              Create Profile
            </Button>

</Row>

      </form>
      );
    }
  }

export default Newuser
