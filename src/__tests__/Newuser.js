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

/*it("passes values on submit", ()=>{
  const mockSubmitHandler = jest.fn()
  const component = mount(<Newuser onSubmit={mockSubmitHandler}/>)
  component.find('input[name="firstName"]').simulate('change', {target: {value: 'fernando', name: 'firstName'}})
  component.find('input[name="lastName"]').simulate('change', {target: {value: 'fonzu', name: 'lastName'}})
  component.find('input[name="email"]').simulate('change', {target: {value: 'madrid@yahoo.com', name: 'email'}})
  component.find('input[name="phone"]').simulate('change', {target: {value: '619-244-3434', name: 'phone'}})
  component.find('button#submit').simulate('click', {button: 0})

  const submittedValues = mockSubmitHandler.mock.calls[0][0]

  expect(submittedValues["firstName"]).toBe("fernando")
  expect(submittedValues["lastName"]).toBe('fonzu')
  expect(submittedValues["email"]).toBe("madrid@yahoo.com")
  expect(submittedValues["phone"]).toBe("619-244-3434")
})
*/

it("shows flash message when there is an error", ()=>{
  const mockSubmitHandler = jest.fn()
  const validationErrors = [
    {
      param: 'name',
      msg: 'Is required.'
    }
  ]
  const component = mount(<Newuser onSubmit={mockSubmitHandler} errors={validationErrors}/>)
  expect(component.find(".alert-danger").length).toBe(1)
})

it("highlights first name input when there is an error", ()=>{
  const mockSubmitHandler = jest.fn()
  const validationErrors = [
    {
      param: 'name',
      msg: 'Is required.'
    }
  ]
  const component = mount(<Newuser onSubmit={mockSubmitHandler} errors={validationErrors}/>)
  expect(component.find('#firstName-form-group.has-error').length).toBe(1)
})

it("no help message for first name when there is no error", ()=>{
  const mockSubmitHandler = jest.fn()
  const component = mount(<Newuser onSubmit={mockSubmitHandler}/>)
  expect(component.find("#firstName-help-block").length).toBe(0)
})

it("shows help message for first name when there is an error", ()=>{
  const mockSubmitHandler = jest.fn()
  const validationErrors = [
    {
      param: 'name',
      msg: 'Is required.'
    }
  ]
  const component = mount(<Newuser onSubmit={mockSubmitHandler} errors={validationErrors}/>)
  expect(component.find("#name-help-block").length).toBe(1)
})

it("highlights last name input when there is an error", ()=>{
  const mockSubmitHandler = jest.fn()
  const validationErrors = [
    {
      param: 'name',
      msg: 'Is required.'
    }
  ]
  const component = mount(<Newuser onSubmit={mockSubmitHandler} errors={validationErrors}/>)
  expect(component.find('#lastName-form-group.has-error').length).toBe(1)
})

it("no help message for last name when there is no error", ()=>{
  const mockSubmitHandler = jest.fn()
  const component = mount(<Newuser onSubmit={mockSubmitHandler}/>)
  expect(component.find("#lastName-help-block").length).toBe(0)
})

it("shows help message for last name when there is an error", ()=>{
  const mockSubmitHandler = jest.fn()
  const validationErrors = [
    {
      param: 'name',
      msg: 'Is required.'
    }
  ]
  const component = mount(<Newuser onSubmit={mockSubmitHandler} errors={validationErrors}/>)
  expect(component.find("#lastName-help-block").length).toBe(1)
})

it("highlights email input when there is an error", ()=>{
  const mockSubmitHandler = jest.fn()
  const validationErrors = [
    {
      param: 'name',
      msg: 'Is required.'
    }
  ]
  const component = mount(<Newuser onSubmit={mockSubmitHandler} errors={validationErrors}/>)
  expect(component.find('#email-form-group.has-error').length).toBe(1)
})

it("no help message for email when there is no error", ()=>{
  const mockSubmitHandler = jest.fn()
  const component = mount(<Newuser onSubmit={mockSubmitHandler}/>)
  expect(component.find("#email-help-block").length).toBe(0)
})

it("shows help message for email when there is an error", ()=>{
  const mockSubmitHandler = jest.fn()
  const validationErrors = [
    {
      param: 'name',
      msg: 'Is required.'
    }
  ]
  const component = mount(<Newuser onSubmit={mockSubmitHandler} errors={validationErrors}/>)
  expect(component.find("#email-help-block").length).toBe(1)
})

it("highlights phone input when there is an error", ()=>{
  const mockSubmitHandler = jest.fn()
  const validationErrors = [
    {
      param: 'name',
      msg: 'Is required.'
    }
  ]
  const component = mount(<Newuser onSubmit={mockSubmitHandler} errors={validationErrors}/>)
  expect(component.find('#phone-form-group.has-error').length).toBe(1)
})

it("no help message for phone when there is no error", ()=>{
  const mockSubmitHandler = jest.fn()
  const component = mount(<Newuser onSubmit={mockSubmitHandler}/>)
  expect(component.find("#phone-help-block").length).toBe(0)
})

it("shows help message for phone when there is an error", ()=>{
  const mockSubmitHandler = jest.fn()
  const validationErrors = [
    {
      param: 'name',
      msg: 'Is required.'
    }
  ]
  const component = mount(<Newuser onSubmit={mockSubmitHandler} errors={validationErrors}/>)
  expect(component.find("#phone-help-block").length).toBe(1)
})
