import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem markAsRead={()=>{}} />);
    expect(wrapper.exists()).toBeTruthy();
  });

// Test case for rendering a notification with 'value'
it('renders a notification with value', () => {
  // Sample data for the notification
  const notification = {
    type: 'info',
    value: 'This is a notification message',
  };

  // Mock function for the 'markAsRead' callback
  const mockMarkAsRead = jest.fn();

  // Shallow render the NotificationItem component
  const wrapper = shallow(
    <NotificationItem
      type={notification.type}
      value={notification.value}
      markAsRead={mockMarkAsRead}
    />
  );

  // Assert that the rendered HTML matches the expected structure
  expect(wrapper.find('li')).toHaveLength(1);
  expect(wrapper.find('[data-notification-type="info"]')).toHaveLength(1);
  expect(wrapper.text()).toEqual(notification.value);

  // Simulate a click event to mark the notification as read
  wrapper.find('li').simulate('click');

  // Assert that the 'markAsRead' callback was called with the expected arguments
  expect(mockMarkAsRead).toHaveBeenCalledWith();
});

// Test case for rendering a notification with 'html' content
it('renders a notification with HTML content', () => {
  // Sample data for the notification with HTML content
  const notification = {
    type: 'warning',
    html: {
      __html: '<strong>Warning:</strong> This is an important message',
    },
  };

  // Mock function for the 'markAsRead' callback
  const mockMarkAsRead = jest.fn();

  // Shallow render the NotificationItem component
  const wrapper = shallow(
    <NotificationItem
      type={notification.type}
      html={notification.html}
      markAsRead={mockMarkAsRead}
    />
  );

  // Assert that the rendered HTML matches the expected structure
  expect(wrapper.find('li')).toHaveLength(1);
  expect(wrapper.find('[data-notification-type="warning"]')).toHaveLength(1);
  expect(wrapper.html()).toContain(notification.html.__html);

  // Simulate a click event to mark the notification as read
  wrapper.find('li').simulate('click');

  // Assert that the 'markAsRead' callback was called with the expected arguments
  expect(mockMarkAsRead).toHaveBeenCalledWith();
});
});
