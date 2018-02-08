import React, { Component } from 'react';
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  ListGroup,
  ListGroupItem,
  Grid,
  PageHeader,
  Row,
  Col
} from 'react-bootstrap'


export default class Availabilities extends Component {
	constructor(props){
    super(props)
    this.state = {
      availabilities: [
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
    let avail = this.state.availabilities.map(function(avail) {

      return (
        <li key={avail.firstName}>  {avail.firstName} {avail.lastName} {avail.email} {avail.phone} </li>
      )
    })

    return (
      <ul>
        {avail}
      </ul>
    );
  }
}
