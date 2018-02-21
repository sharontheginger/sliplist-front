import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			availabilities:[],
			showingInfoWindow: false,
			activeMarker: {},
			selectedPlace: {},
		}

		this.onMarkerClick = this.onMarkerClick.bind(this);
		this.onMapClicked = this.onMapClicked.bind(this);

	}

	onMarkerClick = (props, marker, e)=>{
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});
	}

	onMapClicked = (props)=> {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			})
		}
	}



	render() {
	    return (
			<Map google={this.props.google} initialCenter={{
				lat:32.7157,
				lng:-117.1611
	        }}
			style={{width:"1200px", height:"600px"}}
			className='container'
	 		zoom={13}>
	    		<Marker
		  			title={'San Diego Yacht Club'}
	      			name={'SDYC'}
	      			position={{lat:32.7183841, lng: -117.2292025}} />
	    		<Marker
					name={'Shelter Island Marina'}
					title={'Shelter Island Marina'}
					position={{lat: 32.709925, lng: -117.231824}} />
				<Marker />
				<Marker
					name={'Embarcadero Mooring field'}
					title={'Embarcadero Mooring field'}
					position={{lat: 32.726191, lng: -117.176331}} />
				<Marker />
				<Marker
					name={'Bridge Mooring field'}
					title={'Bridge Mooring field'}
					position={{lat: 32.688582, lng: -117.162332}}
				/>
				<Marker onMouseover={this.onMouseoverMarker}
					name={'Current location'} />
	  		</Map>
	    );
	}
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAPHEKTmg_-2YGuO7CSoQgw-nunhQL7xTM")
})(MapContainer)
