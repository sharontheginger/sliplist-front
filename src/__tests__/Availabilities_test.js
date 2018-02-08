import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Availabilities from '../pages/Availabilities'
import { mount } from 'enzyme'

it('Locations renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Availabilities />, div)
})

it('Renders the Availabilities', () => {
  const component = mount(<Availabilities />)
  const headings = component.find('ul')
  expect(headings.length).toBe(1)
})

it('Renders the Availabilities firstName', ()=>{
  const component = mount(<Availabilities />)
  const firstName = component.find('ul > .availabilities-firstName').first()
  expect(firstName.text()).toBe("fernando")
})

it('Renders the Availabilities lastName', ()=>{
  const component = mount(<Availabilities availabilities={availabilities} />)
  const age = component.find('ul > .availabilities-lastName').first()
  expect(lastName.text()).toBe("fonzu")
})

it('Renders Availabilities email', ()=>{
  const component = mount(<Availabilities availabilities={availabilities} />)
  const age = component.find('.availabilities-email').first()
  expect(email.text()).toBe("mandrid@yahoo.com")
})
