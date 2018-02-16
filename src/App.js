import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import {
	Col,
	Row,
	Grid,
	PageHeader
} from 'react-bootstrap'
import './App.css'
import CarouselTop from './components/Carousel'
import NavbarTop from './components/NavbarTop'
import Newuser from './pages/Newuser'
import Availabilities from './pages/Availabilities'
import CreateAvailability from './pages/CreateAvailability'
import GoogleApiWrapper from './components/mapcontainer'
import Login from './pages/signin.js'

const apiUrl = "http://localhost:3000"

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			googleAPI: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAPHEKTmg_-2YGuO7CSoQgw-nunhQL7xTM&callback=initMap",
			errors: null,
			users: [],

			

		availabilities:[],
	    	newUserSuccess: false,
			newAvailSuccess: false,
 
			isLoggedIn: false,
			logOutSuccess: false,
			logInSuccess: false
		}
	}


	loggedIn() {
		if(localStorage.getItem('authToken') != null) {
			this.setState({isLoggedIn: true})
		}
	}

	logOut() {
		localStorage.removeItem('authToken')
		this.setState({isLoggedIn: false, logOutSuccess: true})
	}

	componentWillMount(){
		if(localStorage.getItem('authToken') != null) {
			this.setState({isLoggedIn: true})
		} else {
			this.setState({isLoggedIn: false})
		}
	}



	getUsers() {
		fetch(`${apiUrl}/users`)
		.then((raw) => {
			return raw.json()
		})
		.then((res) => {
			this.setState({users: res.users})
		})
	}

	handleNewuser(params){
		fetch(`${apiUrl}/users`,{
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
					newUserSuccess: true,
					isLoggedIn: true
				})
				console.log(this.state.user)
				localStorage.setItem('authToken', this.state.user[0].authToken)
			}
		}).catch(function() {
			console.log('could not save new user')
		})
	}

	handleNewAvail(params){
	fetch(`${apiUrl}/availabilities`,
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
		const avails = Object.assign([], this.state.availabilities)
		avails.push(parsedResponse.available) // <- Add the new cat to our list of users
		this.setState({
		  avails: avails,  // <- Update cats in state
		  errors: null, // <- Clear out any errors if they exist
					newAvailSuccess: true,
			})
		  }
	  })
	}




	handleExistingUser(params) {
		fetch(`${apiUrl}/login`,{
			body:JSON.stringify(params),
			headers: {
				'Content-Type': 'application/json'
			},
			method: "POST"
		}).then((rawResponse) => {
			return rawResponse.json()
		}).then((parsedResponse) => {
			if(parsedResponse.errors){
				this.setState({errors: parsedResponse.errors})
				console.log(this.state.errors)
			} else {
				const user = Object.assign([], this.state.user)
				user.push(parsedResponse.user)
				this.setState({
					user: user,  // <- Update users in state
					errors: null, // <- Clear out any errors if they exist
					logInSuccess: true, // <- This is the new flag in state
					isLoggedIn: true
				})
				console.log(this.state.user)
				localStorage.setItem('authToken', this.state.user[0].authToken)
			}
		}).catch(function() {
			console.log('could not save new user')
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
											<small className='subtitle'> Sign Up </small>
										</Col>
									</Row>
								</PageHeader>
								<div className="flex">


										<div className="container-left">
											<Newuser onSubmit={this.handleNewuser.bind(this)}
											errors={this.state.errors && this.state.errors.validations} />
											{this.state.newUserSuccess && <Redirect to="/availabilities" /> }

											</div>

										<div className="container-right">
											<Login onSubmit={this.handleExistingUser.bind(this)}
											errors={this.state.errors && (this.state.errors.validations || this.state.errors.serverValidations)} />
											{this.state.logInSuccess && <Redirect to="/" /> }

								</div>
								</div>
								<GoogleApiWrapper />
							</Grid>


						)} />

						<Route exact path="/availabilities" render={props => (
							<Grid>
								<PageHeader>
									<Row>
										<Col xs={8}>
											<small className='subtitle'>Select a profile for more information</small>
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
											<small className='subtitle'> Welcome</small>
										</Col>
									</Row>

								</PageHeader>
								<CreateAvailability onSubmit={this.handleNewAvail.bind(this)} />
							</Grid>
						)} />

						<Route exact path="/signin" render={props => (
							<Grid>
								<PageHeader>
									<Row>
										<Col xs={8}>
											<small className='subtitle'>Please enter your log in information below. </small>
										</Col>
									</Row>
								</PageHeader>
							</Grid>
						)} />
					</div>
				</div>
			</Router>
		);
	}
}
export default App;
