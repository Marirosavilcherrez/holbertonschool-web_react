import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders one cell with colspan=2 when textSecondCell does not exist and isHeader is true', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="HeaderCell" />
    );

    expect(wrapper.find('th').prop('colSpan')).toEqual(2);
  });

  it('renders two cells when textSecondCell is present and isHeader is true', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="HeaderCell" TextSecondCell="SecondHeaderCell" />
    );

    expect(wrapper.find('th').length).toEqual(2);
  });

  it('renders correctly two td elements within a tr element when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="DataCell" TextSecondCell="SecondDataCell" />
    );

    expect(wrapper.find('tr td').length).toEqual(2);
  });
});
