import { mount, shallow } from 'enzyme';
import React from 'react';
import App from './App';
import { handleKeyDown } from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
  });

  it('contain Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  it('contain Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('contain Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('contain Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it('CourseList', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });

  it('isLoggedIn true', () => {
    const wrapper = shallow(<App isLoggedIn />);
    expect(wrapper.find('Login')).toHaveLength(0);
    expect(wrapper.find('CourseList')).toHaveLength(1);
  });

  it('verify when key control and h appear a alert', () => {

    //mock from the function handleKeyDown
    const handleKeyDownMock = jest.fn();

    const wrapper = mount(<App handleKeyDown = {handleKeyDownMock}/>);
    //simulate the presing down 2 keys from the keyboard
    wrapper.simulate('keyDown',{ key: 'control', keyCode: 17 });
    wrapper.simulate('keyDown',{ key: 'h', keyCode: 72 });

    //what except
    expect(handleKeyDown).toHaveBeenCalled()
  })
});
