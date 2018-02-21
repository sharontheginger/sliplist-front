import React, { Component } from 'react';
import {BrowserRouter as Link} from 'react-router-dom'
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
		}
	}

	render() {
      return (
			<div className="ownerBoat">
		  		<form className="Create">
        			<Row>
          				<Col xs={16}>
            				<FormGroup bsSize="large">
              					<ControlLabel id="loa">
									Length Over All
								</ControlLabel>
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
	          			<Col xs={16}>
	            			<FormGroup bsSize="large">
	              				<ControlLabel id="type">
									Type
								</ControlLabel>
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
						<Col xs={16}>
							<FormGroup>
								<ControlLabel id="location">
									Location
								</ControlLabel>
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
						<Col xs={16}>
							<FormGroup>
								<ControlLabel id="Description">
									Description
								</ControlLabel>
								<FormControl
									type="textarea"
									name="description"
									placeholder="A description of additional information the renter might need (Example: )"
									componentClass="textarea"
									style={{height: 100}}
									onChange={this.handleChange.bind(this)}
									value={this.state.locationform.description}
								/>
							</FormGroup>
						</Col>
					</Row>

					<Row>
          				<Col xs={16}>
            				<Button className="btn btn-success"
								bsSize="large"
								onClick={this.handleSubmit.bind(this)}
							>
								Create Availability
							</Button>
          				</Col>
        			</Row>
	  			</form>
				<div className="container">
	  				<img id="image" src="https://images.unsplash.com/photo-1463464013989-87d18b6e0d95?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af86d72875103147a1535adad0092095&auto=format&fit=crop&w=632&q=80" alt="pic of boat"/>
				</div>
			</div>
		);
    }
}
export default CreateAvailability
