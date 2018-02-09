import React, { Component } from 'react';
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row
} from 'react-bootstrap'

class Availabilities extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <ListGroup>
            {this.props.availabilities.map((availabilities, index) =>{
              return (
                <ListGroupItem
                  key={index}
                  header={
                    <h4>
                      <span className='avail-name'>
                        {availabilities.firstName}
                      </span>
                      - <small className='avail-age'>{availabilities.lastName} years old</small>
                    </h4>
                  }>
                  <span className='avail-enjoys'>
                    {availabilities.email}
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
export default Availabilities
