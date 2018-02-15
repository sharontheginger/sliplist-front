import React, { Component } from 'react';
import {
  Button,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap'


class CreateAvailability extends Component {
	constructor(props){
  super(props)
  this.state = {
    locationform:{
    	loa:"",
		kind:"",
		location:"",
		description:""
    }
  }
}

handleChange(event){
  const formState = Object.assign({}, this.state.locationform)
  formState[event.target.name] = event.target.value
  this.setState({locationform: formState})
}

handleSubmit() {
  const { onSubmit } = this.props
  const { locationform } = this.state

  if(onSubmit) {
	onSubmit(locationform)
  } else {
	console.log("no onSubmit function provided");
  }
}

	render() {
      return (
		  <form>

        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="loa">Length Over All</ControlLabel>
              <FormControl
			  type="string"
			  name="loa"
        	  placeholder="25 feet"
			  onChange={this.handleChange.bind(this)}
  	  		  value={this.state.locationform.loa}
 		  	/>
            </FormGroup>
          </Col>
        </Row>


		<Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="type">Type</ControlLabel>
			  <FormControl
			  type="string"
			  name="kind"
        	  placeholder="Slip or Mooring ball etc."
			  onChange={this.handleChange.bind(this)}
  	  		  value={this.state.locationform.kind}
 		  	/>
            </FormGroup>
          </Col>
        </Row>

		<Row>
			<Col xs={6}>
				<FormGroup>
					<ControlLabel id="location">Location</ControlLabel>
						<FormControl
						type="string"
						name="location"
						placeholder="Location"
						onChange={this.handleChange.bind(this)}
						value={this.state.locationform.location}
						/>
				</FormGroup>
			</Col>
		</Row>

		<Row>
			<Col xs={6}>
				<FormGroup>
					<ControlLabel id="Description">Description</ControlLabel>
						<FormControl
						type="textarea"
						name="description"
						placeholder="A description of additional information the renter might need"
						componentClass="textarea"
						onChange={this.handleChange.bind(this)}
						value={this.state.locationform.description}
						/>
				</FormGroup>
			</Col>
		</Row>

		<Row>
          <Col xs={6}>
            <Button id="submit"
			onClick={this.handleSubmit.bind(this)}>
			Create Availability
			</Button>
          </Col>
        </Row>

      </form>
      );
    }
  }

export default CreateAvailability
