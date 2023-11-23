import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('does not display CourseList when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });

  describe('when isLoggedIn is true', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App isLoggedIn={true} />);
    });

    it('does not include Login component', () => {
      expect(wrapper.find(Login).exists()).toBe(false);
    });

    it('includes CourseList component', () => {
      expect(wrapper.find(CourseList).exists()).toBe(true);
    });
  });
});

