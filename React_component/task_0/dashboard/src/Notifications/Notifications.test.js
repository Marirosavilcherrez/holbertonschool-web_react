import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render NotificationItem elements', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3); // Assuming you have 3 NotificationItem elements
  });

  it('should render the right html for the first NotificationItem', () => {
    const wrapper = shallow(<Notifications />);
    const firstNotificationItem = wrapper.find(NotificationItem).at(0);
    const expectedHtml = 'New course available'; // Replace this with the expected HTML content

    expect(firstNotificationItem.contains(expectedHtml)).toBeTruthy();
  });
});
