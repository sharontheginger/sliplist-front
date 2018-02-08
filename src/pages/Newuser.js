import React, { Component } from 'react';
import {
  Button,
  Grid,
  PageHeader,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
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

	render() {
      return (
		  <form>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="firstName">First Name
              </ControlLabel>
              <FormControl
		           type="string"
		           name="firstName"
               placeholder='First Name'
		           onChange={this.handleChange.bind(this)}
	  		       value={this.state.userform.firstName}
 		  	      />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="lastname">Last Name
              </ControlLabel>
      			  <FormControl
        			  type="string"
        			  name="lastName"
                placeholder='Last Name'
        			  onChange={this.handleChange.bind(this)}
          	  	value={this.state.userform.lastName}/>
            </FormGroup>
          </Col>
        </Row>

		    <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="email">Email</ControlLabel>
    			  <FormControl
      			  type="string"
      			  name="email"
              placeholder='example@example.com'
      			  onChange={this.handleChange.bind(this)}
        	  	value={this.state.userform.email}/>
            </FormGroup>
          </Col>
        </Row>

		    <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="phone">Phone</ControlLabel>
        			  <FormControl
          			  type="string"
          			  name="phone"
                  placeholder='619-555-1212'
          			  onChange={this.handleChange.bind(this)}
            	  	value={this.state.userform.phone}/>
                </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <Button id="submit">Create Profile</Button>
          </Col>
        </Row>

      </form>
      );
    }
  }

export default Newuser
