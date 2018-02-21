import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Availabilities from '../pages/Availabilities'
import { mount } from 'enzyme'

const availabilities =  [
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

it('Availabilities renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Availabilities />, div)
})

it('Renders the availabilities first name', () => {
  const component = mount(<Availabilities availabilities={availabilities} />)
  const headings = component.find('h4 > .availabilities-firstName')
  expect(headings.length).toBe(3)
})


it('Renders the last name', ()=>{
  const component = mount(<Availabilities availabilities={availabilities} />)
  const lastName = component.find('h4 > .availabilities-lastName').first()
  expect(lastName.text()).toBe("fonzu")
})

it('Renders the email', ()=>{
  const component = mount(<Availabilities availabilities={availabilities} />)
  const email = component.find('.availabilities-email').first()
  expect(email.text()).toBe("mandrid@yahoo.com")
})

it('Renders the phone', ()=>{
  const component = mount(<Availabilities availabilities={availabilities} />)
  const phone = component.find('.availabilities-phone').first()
  expect(phone.text()).toBe("619-244-3434")
})
