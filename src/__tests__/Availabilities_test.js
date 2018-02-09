import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Availabilities from '../pages/Availabilities'
import { mount } from 'enzyme'


it('Availabilities renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Availabilities />, div)
})
