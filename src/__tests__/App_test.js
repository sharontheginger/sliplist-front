import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { mount } from 'enzyme'

it("renders without crashing", () => {
  const app = mount(<App />)
});

it("renders a sign up form", ()=>{
  const app = mount(<App />)
  expect(app.find('.subtitle').text()).toEqual(' Sign Up ')
})

it("links to availabilities index", ()=>{
  const app = mount(<App />)
  app.find('a#availabilities-link').simulate('click', {button: 0})
  expect(app.find('.subtitle').text()).toEqual('please sign up to contact owner')
})
