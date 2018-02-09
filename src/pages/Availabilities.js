import React, { Component } from 'react';
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row
} from 'react-bootstrap'

class Availabilities extends Component {
  render() {
    let avails = this.props.availabilities || []

    // this is the long-hand version of the above
    // let avails;
    // if(this.props.availabilities == undefined) {
    //   avails = []
    // } else {
    //   avails = this.props.availabilities
    // }

    return (
      <Row>
        <Col xs={12}>
          <ListGroup>
            {avails.map((a, index) => {
              return (
                <ListGroupItem
                  key={index}
                  header={
                    <h4>
                      <span className='availabilities-firstName'>
                        {a.firstName}
                      </span>
                      - <small className='availabilities-lastName'>{a.lastName}</small>
                    </h4>
                  }>
                  <span className='availabilities-email'>
                    {a.email}
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
