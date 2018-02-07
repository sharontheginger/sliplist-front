import React, { Component } from 'react';
import {
  ListGroup,
  ListGroupItem,
  Grid,
  PageHeader,
  Row,
  Col
} from 'react-bootstrap'


class Locations extends Component {
  render() {
    return (
      <Row>
        <Col>
		<ListGroup>
            {this.props.locations.map((location, index) =>{
              return (
                <ListGroupItem
                  key={index}
                  header={
                    <h4>
                      <span className='location-firstName'>
                        {location.firstName}
                      </span>
                       <span className='location-lastName'>
					   {location.lastName}
					   </span>
                    </h4>
                  }>
                  <span className='location-email'>
                    {location.email}
                  </span>
				  <span className='location-phone'>
                    {location.phone}
                  </span>
                </ListGroupItem>
              )
            })}
          </ListGroup>
        </Col>
      </Row>
    );
  }
}

export default Locations
