import React, { Component } from 'react';
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row
} from 'react-bootstrap'

class Availabilities extends Component {
  render() {
    let avails = this.props.availabilities



    return (
		<Row>
        	<Col xs={12}>
          		<ListGroup>
            		{avails.map((avail, index) => {
              		return (
	                	<ListGroupItem
	                  		key={index}
	                  		header={
						  		<h4><strong>Current Availability: </strong></h4>
						  	}>
						  	<div>
		                      	<span className='availabilities-loa'>
		                        	<strong>Length Over All: </strong> {avail.loa} feet
		                      	</span>

							  	<br/>

		                      	<span className='availabilities-kind'><strong>Type: </strong> {avail.kind}
							  	</span>

						  	</div>

	                  		<span className='availabilities-location'>
	                    		<strong>Location: </strong>{avail.location}
	                  		</span>

					  		<br/>

					  		<span className='availabilities-description'>
	                    		<strong>Description: </strong>{avail.description}
	                  		</span>

					  		<br/>
	                	</ListGroupItem>
              		)
            		})}
          		</ListGroup>
		  		<br/>
        	</Col>
      	</Row>

	);
  }
}
export default Availabilities
