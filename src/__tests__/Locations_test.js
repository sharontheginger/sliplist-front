import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App';
import Locations from '../Locations.js'
import { mount } from 'enzyme'

it('Locations renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Locations />, div)
})
