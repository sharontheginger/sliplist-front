import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import {
	Col,
	Row,
	Grid,
	PageHeader
} from 'react-bootstrap'
import CarouselTop from './components/Carousel'
import Locations from './Locations'
import Newuser from './Newuser'
import NavbarTop from './components/NavbarTop'
import CreateLocation from './components/CreateLocation'
import Header from './components/header'


class App extends Component {
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
      <Router>

				<div>
		<NavbarTop />
		<CarouselTop />
		<Header name={this.state.locations} />
						<div>


          <Route exact path="/" render={props => (
            <Grid>
              <PageHeader>
                <Row>
                  <Col xs={8}>
                  SlipList <br />
                    <small className='subtitle'>Sign Up</small>
                      </Col>
                      <Col xs={4}>
                    <small>
                    <Link to='/locations' id='locations-link'>Locations</Link>
                    </small>
                  </Col>
                </Row>
              </PageHeader>
			  <Newuser name={this.props.userform}/>
            </Grid>
          )} />

				<Route exact path="/locations" render={props => (
          <Grid>
            <PageHeader>
              <Row>
                <Col xs={8}>
                  SlipList <br />
                  <small className='subtitle'>Locations</small>
                </Col>
                <Col xs={4}>
                  <small>
                    <Link to='/' id='signup-link'>Sign Up</Link>
                  </small>
                </Col>
              </Row>
            </PageHeader>
						<CreateLocation name={this.props.locationform}/>
          </Grid>
        )} />

		</div>
        </div>
      </Router>
      );
    }
  }

export default App;
