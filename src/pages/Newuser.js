import React, { Component } from 'react';
import {
  Button,
  Grid,
  PageHeader,
  Row,
  Col,
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
    userform:{
      firstName: '',
      lastName: '',
  	  email: '',
      phone: ''
    }
  }
}

handleChange(event){
  const formState = Object.assign({}, this.state.form)
  formState[event.target.name] = event.target.value
  this.setState({userform: formState})
}

handleSubmit() {
  this.props.onSubmit(this.state.userform)
}

errorsFor(attribute){
  var errorString = ""
  if(this.props.errors){
    const errors = this.props.errors.filter(error => error.param === attribute )
    if(errors){
      errorString = errors.map(error => error.msg ).join(", ")
    }
  }
  return errorString === "" ? null : errorString
}

	render() {
      return (
		  <form>
        <Row>
          <Col xs={6}>
            {this.props.errors &&
              <Alert bsStyle="danger">
                Please check the form and try again.
              </Alert>
            }
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup
              id="firstName-form-group"
              validationsState={this.errorsFor('firstName') && 'error'}>
              <ControlLabel id="firstName">First Name</ControlLabel>
              <FormControl
		           type="string"
		           name="firstName"
               placeholder='First Name'
		           onChange={this.handleChange.bind(this)}
	  		       value={this.state.userform.firstName}
 		  	      />
              {this.errorsFor('firstName') &&
                <HelpBlock id="firstName-help-block">{this.errorsFor('firstName')}</HelpBlock>
              }
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup
              id="lastName-form-group"
              validationState={this.errorsFor('lastName') && 'error'}>
              <ControlLabel id="lastName">Last Name</ControlLabel>
      			  <FormControl
        			  type="string"
        			  name="lastName"
                placeholder='Last Name'
        			  onChange={this.handleChange.bind(this)}
          	  	value={this.state.userform.lastName}
                />
              {this.errorsFor('lastName') &&
                  <HelpBlock id="lastName-help-block">{this.errorsFor('lastName')}</HelpBlock>
                }
            </FormGroup>
          </Col>
        </Row>

		    <Row>
          <Col xs={6}>
            <FormGroup
              id="email-form-group"
              validationState={this.errorsFor('email') && 'error'}>
              <ControlLabel id="email">Email</ControlLabel>
    			  <FormControl
      			  type="string"
      			  name="email"
              placeholder='example@example.com'
      			  onChange={this.handleChange.bind(this)}
        	  	value={this.state.userform.email}
              />
            {this.errorsFor('email') &&
                <HelpBlock id="email-help-block">{this.errorsFor('email')}</HelpBlock>
              }
            </FormGroup>
          </Col>
        </Row>

		    <Row>
          <Col xs={6}>
            <FormGroup
              id="phone-form-group"
              validationState={this.errorsFor('phone') && 'error'}>
              <ControlLabel id="phone">Phone</ControlLabel>
        			  <FormControl
          			  type="string"
          			  name="phone"
                  placeholder='619-555-1212'
          			  onChange={this.handleChange.bind(this)}
            	  	value={this.state.userform.phone}
                  />
                {this.errorsFor('phone') &&
                    <HelpBlock id="phone-help-block">{this.errorsFor('phone')}</HelpBlock>
                  }
                </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <Button
              id="submit"
              onClick={this.handleSubmit.bind(this)}>
              Create Profile
            </Button>
          </Col>
        </Row>

      </form>
      );
    }
  }

export default Newuser
