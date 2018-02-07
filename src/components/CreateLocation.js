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


class CreateLocation extends Component {
	constructor(props){
  super(props)
  this.state = {
    locationform:{
      owner: '',
      location: '',
	  description: ''
    }
  }
}

handleChange(event){
  const formState = Object.assign({}, this.state.locationform)
  formState[event.target.name] = event.target.value
  this.setState({locationform: formState})
}

	render() {
      return (
		  <form>

        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="owner">Owner</ControlLabel>
              <FormControl
			  type="string"
			  name="owner"
			  onChange={this.handleChange.bind(this)}
  	  		  value={this.state.locationform.owner}
 		  	/>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="location">Locations</ControlLabel>
			  <FormControl
			  type="string"
			  name="location"
			  onChange={this.handleChange.bind(this)}
  	  		  value={this.state.locationform.location}
 		  	/>
            </FormGroup>
          </Col>
        </Row>

		<Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="description">Description</ControlLabel>
			  <FormControl
			  type="string"
			  name="description"
			  onChange={this.handleChange.bind(this)}
  	  		  value={this.state.locationform.description}
 		  	/>
            </FormGroup>
          </Col>
        </Row>
		<Row>
          <Col xs={6}>
            <Button id="submit" >Create Location</Button>
          </Col>
        </Row>

      </form>
      );
    }
  }

export default CreateLocation
