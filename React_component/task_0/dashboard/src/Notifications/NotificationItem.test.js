import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render with correct type and value props', () => {
    const type = 'default';
    const value = 'test';
    const wrapper = shallow(<NotificationItem type={type} value={value} html={{ __html: '<u>test</u>' }} />);
    
    expect(wrapper.prop('data-notification-type')).toBe(type);
    expect(wrapper.text()).toBe(value);
  });

  it('should render with correct html prop', () => {
    const html = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem type="default" value="test" html={html} />);
    
    expect(wrapper.prop('dangerouslySetInnerHTML')).toEqual(html);
  });
});
