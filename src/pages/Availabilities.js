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
            {avails.map((avail, index) => {
              return (
                <ListGroupItem
                  key={index}
                  header={
                    <h4>
                      <span className='availabilities-loa'>
                        {avail.loa}
                      </span>
                      - <span className='availabilities-kind'>{avail.kind}</span>
                    </h4>
                  }>
                  <span className='availabilities-location'>
                    {avail.location}
                  </span>
				  <br />
				  <span className='availabilities-description'>
                    {avail.description}
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
