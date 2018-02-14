import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import {
	Col,
	Row,
	Grid,
	PageHeader
} from 'react-bootstrap'
import CarouselTop from './components/Carousel'
import NavbarTop from './components/NavbarTop'
import Newuser from './pages/Newuser'
import Availabilities from './pages/Availabilities'
import CreateAvailability from './pages/CreateAvailability'
import GoogleApiWrapper from './components/mapcontainer'



class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			googleAPI: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAPHEKTmg_-2YGuO7CSoQgw-nunhQL7xTM&callback=initMap",
			errors: null,
			apiUrl: "http://localhost:3000",
			users: [],
	    	newUserSuccess: false,
		}
	}

	componentWillMount() {

	}

	getUsers() {
		fetch(`${this.state.apiUrl}/users`)
		.then((raw) => {
			return raw.json()
		})
		.then((res) => {
			this.setState({users: res.users})
		})
	}

	handleNewuser(params){
    fetch(`${this.state.apiUrl}/users`,
      {
        body: JSON.stringify(params),  // <- we need to stringify the json for fetch
        headers: {  // <- We specify that we're sending JSON, and expect JSON back
          'Content-Type': 'application/json'
        },
        method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
      }
    )
    .then((rawResponse)=>{
      return rawResponse.json()
    })
    .then((parsedResponse) =>{
      if(parsedResponse.errors){ // <- Check for any server side errors
        this.setState({errors: parsedResponse.errors})
      }else{
        const users = Object.assign([], this.state.users)
        users.push(parsedResponse.user) // <- Add the new cat to our list of users
        this.setState({
          users: users,  // <- Update cats in state
          errors: null, // <- Clear out any errors if they exist
					newUserSuccess: true
        })
      }
    })
  }




	render() {
		return (
			<Router>
				<div>
					<NavbarTop />
					<div>
						<Route exact path="/" render={props => (
							<Grid>
								<PageHeader>
								<CarouselTop />
									<Row>
										<Col xs={8}>
											SlipList
											<br />
											<small className='subtitle'> Sign Up </small>
										</Col>
										<Col xs={4}>
											<small> <Link to='/availabilities' id='availabilities-link'> show me availabilities </Link> </small>
										</Col>
									</Row>
								</PageHeader>

								<Newuser onSubmit={this.handleNewuser.bind(this)}
    						errors={this.state.errors && this.state.errors.validations} />
							{this.state.newUserSuccess &&
	      			<Redirect to="/" />
	    				}
								<Availabilities availabilities={this.state.availabilities} />
							</Grid>
						)} />

						<Route exact path="/availabilities" render={props => (
							<Grid>
								<PageHeader>
									<Row>
										<Col xs={8}>
											SlipList <br />
											<small className='subtitle'>please sign up to contact owner</small>
										</Col>
										<Col xs={4}>
											<small> <Link to='/' id='createavailabity-link'> Home </Link></small>
										</Col>
									</Row>
								</PageHeader>
								<Availabilities availabilities={this.state.availabilities} />
							</Grid>
						)} />

					<Route exact path="/createavailability" render={props => (
							<Grid>
								<PageHeader>
								<Row>
									<Col xs={8}>
										SlipList
										<br />
										<small className='subtitle'> Welcome</small>
									</Col>
									<Col xs={4}>
										<small> <Link to='/' id='signup-link'> Home </Link> </small>
									</Col>
								</Row>
								</PageHeader>
								<CreateAvailability createavailability={this.state.createavailability} />
							</Grid>
						)} />
						<GoogleApiWrapper />

					</div>
				</div>
			</Router>
		);
	}
}

export default App;
