import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList Component', () => {
  it('renders CourseList component without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    // You can customize this check based on your actual row rendering logic
    const rows = wrapper.find('CourseListRow');
    expect(rows).toHaveLength(5);
  });
});
