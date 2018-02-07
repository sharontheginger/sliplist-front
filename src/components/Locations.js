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


class Locations extends Component {
  	render() {
        return (
			<h1>{this.props.locations} </h1>
        );
      }
    }

export default Locations
