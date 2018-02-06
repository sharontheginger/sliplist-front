import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {
  Grid,
  PageHeader,
  Row,
  Col
} from 'react-bootstrap'
import Locations from './Pages/Locations'
import Newuser from './Pages/Newuser'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={props => (
            <Grid>
              <PageHeader>
                <Row>
                  <Col xs={8}>
                  SlipList
                    <small className='subtitle'>Locations</small>
                      </Col>
                      <Col xs={4}>
                    <small>
                    <Link to='/' id='locations-link'>Locations</Link>
                    </small>
                  </Col>
                </Row>
              </PageHeader>
            </Grid>
          )} />

          <Route exact path="/Newuser" render={props => (
          <Grid>
            <PageHeader>
              <Row>
                <Col xs={8}>
                  SlipList
                  <small className='subtitle'>Create a User Form</small>
                </Col>
                <Col xs={4}>
                  <small>
                    <Link to='/' id='signup-link'>Sign Up</Link>
                  </small>
                </Col>
              </Row>
            </PageHeader>
          </Grid>
        )} />


        </div>
      </Router>
      );
    }
  }

export default App;
