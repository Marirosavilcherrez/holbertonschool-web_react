import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);
    expect(wrapper.exists());
  });
  // Verifica que el componente renderice un th
it('renders one cell', () => {
  const wrapper = shallow(<CourseListRow textFirstCell='test' isHeader={true}/>);
  const th = wrapper.find('th');
  expect(th).toHaveLength(1);
  expect(th.prop('colSpan')).toEqual(2);
});

// Verifica que el componente renderice dos th
it('renders two cells', () => {
  const wrapper = shallow(<CourseListRow textFirstCell='test' TextSecondCell='second' isHeader={true}/>);
  const th = wrapper.find('th');
  expect(th).toHaveLength(2);
});

// Verifica que el componente renderice una tr con dos td
it('renders two td', () => {
  const wrapper = shallow(<CourseListRow textFirstCell='test' TextSecondCell='second' />);
  const tr = wrapper.find('tr');
  expect(tr).toHaveLength(1);
  expect(tr.find('td')).toHaveLength(2);
});
});
