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
	constructor(props){
    super(props)
    this.state = {
      locations: [
        {
        id: 1,
        firstName: "fernando",
        lastName: "fonzu",
        email: "mandrid@yahoo.com",
	      phone: "619-244-3434"
        },
        {
  			id: 2,
     		 firstName: "orlando",
     		 lastName: "fuji",
     		 email: "landri@yahoo.com",
     		 phone: "619-244-2334"
   	    },
        {
  			id: 3,
          firstName: "bob",
          lastName: "tonhy",
          email: "bob21@yahoo.com",
    		  phone: "619-244-2112"
        },
      ]
    }
  }

  render() {
    return (
      <Row>
        <Col>

        </Col>
      </Row>
    );
  }
}

export default Locations
