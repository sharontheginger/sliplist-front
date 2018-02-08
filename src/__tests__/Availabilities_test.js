import React from 'react'
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
