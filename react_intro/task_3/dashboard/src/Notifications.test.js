import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';


describe('Notifications', () => {
  it('renders notifications without crashing',() => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
});

  it('renders three list items',() => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li').length).toBe(3);
});

  it('renders the text', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains('Here is the list of notifications')).toBe(true);
});
});