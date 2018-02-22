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
import Footer from './components/footer'
import Login from './components/signin.js'
import Logout from './pages/Logout.js'


const apiUrl = process.env.REACT_APP_NODE_ENV === 'production' ? "https://sliplist6.herokuapp.com" : "http://localhost:3001"


class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			googleAPI: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAPHEKTmg_-2YGuO7CSoQgw-nunhQL7xTM&callback=initMap",
			errors: null,
			user: [],


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
		fetch(`${apiUrl}/availabilities`)
		.then((raw)=>{
			return raw.json()
		})
		.then((res) =>{
			this.setState({availabilities: res.availabilities})
		})
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
		.then((raw) => raw.json())
		.then((res) => {
			if(res.errors){ // <- Check for any server side errors
				this.setState({errors: res.errors})
			}else{
				const { user } = this.state

				user.push(res.user) // <- Add the new cat to our list of users

				localStorage.setItem('authToken', this.state.user[0].authToken)

				this.setState({
					user: user,  // <- Update cats in state
					errors: null, // <- Clear out any errors if they exist
					newUserSuccess: true,
					isLoggedIn: true
				})
			}
		}).catch((e) => {
			console.log("error registering:", e);
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
		.then((raw) => raw.json())
		.then((res) => {
			if(res.errors){ // <- Check for any server side errors
				this.setState({errors: res.errors})
			} else {
				const { availabilities } = this.state

				availabilities.push(res.available) // <- Add the new cat to our list of users

				this.setState({
					availabilities: availabilities,  // <- Update cats in state
					errors: null, // <- Clear out any errors if they exist
					newAvailSuccess: true,
				})
			}
		})
		.catch((e) => {
			console.log("error with availability:", e);
		})
	}

	handleExistingUser(params) {
		fetch(`${apiUrl}/users/signin`,{
			body:JSON.stringify(params),
			headers: {
				'Content-Type': 'application/json'
			},
			method: "POST"
		}).then((raw) => raw.json())
		}).then((res) => {
			if(res.errors){
				console.log("login errors", res.errors);
				this.setState({errors: res.errors})
			} else {
				const { user } = this.state
				user.push(res.user)
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
					<NavbarTop isLoggedIn={this.state.isLoggedIn} />
					<div>
						<Route exact path="/"  className="home" render={props => (
							<Grid>
								<PageHeader >
									<CarouselTop />
								</PageHeader>
								<div className="flex">

									<div className="container-left">
										<h1  className='subtitle2'>
											Sign Up
										</h1>
										<Newuser onSubmit={this.handleNewuser.bind(this)}
										errors={this.state.errors && this.state.errors.validations} />
										{this.state.newUserSuccess && <Redirect to="/" /> }
									</div>

									<div className="container-right">
										<h1  className='subtitle'>
											Sign In
										</h1>
										<Login onSubmit={this.handleExistingUser.bind(this)}
										errors={this.state.errors && (this.state.errors.validations || this.state.errors.serverValidations)} />
										{this.state.logInSuccess && <Redirect to="/availabilities" /> }

									</div>

								</div>
								<GoogleApiWrapper />
							</Grid>
						)} />

						<Route exact path="/availabilities" render={props => (
							<div className="avail">
								<Grid>
									<PageHeader>
										<Row>
											<Col xs={8}>
												<br/>
												<small className='subtitle'>Availability Listings for Today: </small>
											</Col>
										</Row>
									</PageHeader>
									<Availabilities availabilities={this.state.availabilities} />
								</Grid>
							</div>
						)} />



						<Route exact path="/availabilities/new" render={props => {
							if(this.state.newAvailSuccess) {
								return <Redirect to="/availabilities" />
							}
							return (
								<Grid>
									<PageHeader>
										<Row>
											<br/>
											<Col sm={12}>
												<small className='subtitle'>Please enter your posting information below: </small>
											</Col>
										</Row>
									</PageHeader>
									<CreateAvailability onSubmit={this.handleNewAvail.bind(this) } />
								</Grid>
							)
						}} />

						<Route path="/logout" render={props => (
							<div>
								<Logout
								onSubmit={this.logOut.bind(this)}
								/>
								{this.state.logOutSuccess &&
									<Redirect to="/" />
								}
							</div>
						)} />
					</div>

				</div>
			</Router>
		);
	}
}
export default App;
