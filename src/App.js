import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import {
	Carousel,
	Button,
	NavDropdown,
	Navbar,
	Nav,
	NavItem,
	MenuItem,
	Col,
	Row,
	Grid,
	PageHeader
} from 'react-bootstrap'
import Locations from './Pages/Locations'
import Newuser from './Pages/Newuser'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
		<div>
          <Navbar inverse collapseOnSelect>
		        <Navbar.Header>
			        <Navbar.Brand>
				        <a href="#brand">slip list</a>
			        </Navbar.Brand>
			        <Navbar.Toggle />
		        </Navbar.Header>
		        <Navbar.Collapse>
			        <Nav>
				        <NavItem eventKey={1} href="#">
					        Link
				        </NavItem>
				        <NavItem eventKey={2} href="#">
					        Link
				        </NavItem>
				        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
					        <MenuItem eventKey={3.1}>Action</MenuItem>
					        <MenuItem eventKey={3.2}>Another action</MenuItem>
					        <MenuItem eventKey={3.3}>Something else here</MenuItem>
					        <MenuItem divider />
					        <MenuItem eventKey={3.3}>Separated link</MenuItem>
				        </NavDropdown>
			        </Nav>
			        <Nav pullRight>
				        <NavItem eventKey={1} href="#">
					        Link Right
				        </NavItem>
				        <NavItem eventKey={2} href="#">
					        Link Right
				        </NavItem>
			        </Nav>
		        </Navbar.Collapse>
	        </Navbar>
        </div>
		<div>
        <Carousel>
		<Carousel.Item>
			<img width={900} height={500} alt="900x500" src="https://images.unsplash.com/photo-1513002277650-6deb8404a2cd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=440f1faab63bf310ab154f63fb74d06d&auto=format&fit=crop&w=1051&q=80" height="900px" width="500px"/>
			<Carousel.Caption>
				<h3>First slide label</h3>
				<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<img width={900} height={500} alt="900x500" src="https://images.unsplash.com/photo-1499980565274-8a78d85da1a8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e977e37414a29ce67852f04ff1bcf1e4&auto=format&fit=crop&w=967&q=80" height="900px" width="500px" />
			<Carousel.Caption>
				<h3>Second slide label</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<img width={900} height={500} alt="900x500" src="https://images.unsplash.com/photo-1516754982724-879e393bb556?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0149c65e2fbfe2e1dfe4be076ba553ce&auto=format&fit=crop&w=1189&q=80"/>
			<Carousel.Caption>
				<h3>Third slide label</h3>
				<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
        </div>

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
