import React, { Component } from 'react';
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row
} from 'react-bootstrap'

class User extends Component {
  render() {
    let users = this.props.users || []

    // this is the long-hand version of the above
    // let users;
    // if(this.props.users == undefined) {
    //   avails = []
    // } else {
    //   avails = this.props.users
    // }

    return (
      <Row>
        <Col xs={12}>
          <ListGroup>
            {users.map((a, index) => {
              return (
                <ListGroupItem
                  key={index}
                  header={
                    <h4>
                      <span className='users-firstName'>
                        {a.firstName}
                      </span>
                      - <span className='users-lastName'>{a.lastName}</span>
                    </h4>
                  }>
                  <span className='users-email'>
                    {a.email}
                  </span>
				  <br />
				  <span className='users-phone'>
                    {a.phone}
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
export default User
