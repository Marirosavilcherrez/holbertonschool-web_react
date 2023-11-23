import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

const wrapper = shallow(<Header />);

it('renders without crashing', () => {
  shallow(<Header />);
});

it('renders header', () => {
  expect(wrapper.find('header.header').exists()).toEqual(true);
});

it('renders header h1', () => {
  expect(wrapper.find('header.header h1').exists()).toEqual(true);
});

it('renders header img', () => {
  expect(wrapper.find('header.header img').exists()).toEqual(true);
});
