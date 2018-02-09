import React from 'react';
import ReactDOM from 'react-dom';
import Newuser from '../pages/Newuser';
import { mount } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Newuser />, div)
})

it('has a first name input', ()=>{
  const component = mount(<Newuser />)
  expect(component.find('label#firstName').text()).toBe("First Name")
})

it('has a last name input', ()=>{
  const component = mount(<Newuser />)
  expect(component.find('label#lastName').text()).toBe("Last Name")
})

it('has a email input', ()=>{
  const component = mount(<Newuser />)
  expect(component.find('label#email').text()).toBe("Email")
})

it('has a phone input', ()=>{
  const component = mount(<Newuser />)
  expect(component.find('label#phone').text()).toBe("Phone")
})

it('has a submit button', ()=>{
  const component = mount(<Newuser />)
  expect(component.find('button#submit').text()).toBe("Create Profile")
})

it("calls submitHandler on submit", ()=>{
  const mockSubmitHandler = jest.fn()
  const component = mount(<Newuser onSubmit={mockSubmitHandler}/>)
  component.find('button#submit').simulate('click', {button: 0})
  expect(mockSubmitHandler.mock.calls.length).toBe(1)
})
