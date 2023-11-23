// Notifications.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

// Mock data for testing
const mockNotifications = [
  {
    id: 1,
    type: 'info',
    value: 'This is an information message',
  },
  {
    id: 2,
    type: 'warning',
    html: {
      __html: '<strong>Warning:</strong> This is a warning message',
    },
  },
];

// Test suite for the Notifications component
describe('Notifications Component', () => {
  // Test case for rendering notifications when displayDrawer is true
  it('renders notifications when displayDrawer is true', () => {
    // Shallow render the Notifications component
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={mockNotifications}
      />
    );

    // Assert that the component renders the expected HTML structure
    expect(wrapper.find('.menuItem')).toHaveLength(1);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find('NotificationItem')).toHaveLength(mockNotifications.length);
  });

  // Test case for rendering no new notifications when listNotifications is empty
  it('renders "No new notification for now" when listNotifications is empty', () => {
    // Shallow render the Notifications component with empty listNotifications
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={[]}
      />
    );

    // Assert that the component renders the expected HTML structure
    expect(wrapper.find('.menuItem')).toHaveLength(1);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
    expect(wrapper.find('table')).toHaveLength(1);
    expect(wrapper.find('ul')).toHaveLength(0);
    expect(wrapper.text()).toContain('No new notification for now');
  });

  // Test case for rendering no notifications when displayDrawer is false
  it('renders no notifications when displayDrawer is false', () => {
    // Shallow render the Notifications component with displayDrawer set to false
    const wrapper = shallow(
      <Notifications
        displayDrawer={false}
        listNotifications={mockNotifications}
      />
    );

    // Assert that the component renders an empty div
    expect(wrapper.find('div')).toHaveLength(0);
  });
});
