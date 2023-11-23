// Notificationitem.js
import React from 'react';
import PropTypes from 'prop-types';

// NotificationItem functional component that displays a notification
const NotificationItem = ({ type, html, value, markAsRead }) => {
  let element;

  // Conditional rendering based on the existence of 'value'
  value 
    ? (element = (
        <li 
          data-notification-type={type}
          // Click handler to mark the notification as read
          onClick={markAsRead}
        >
          {value}
        </li>
      ))
    : (element = (
        <li 
          data-notification-type={type}
          // Render HTML content dangerously (handle with care)
          dangerouslySetInnerHTML={html}
          // Click handler to mark the notification as read
          onClick={markAsRead}
        ></li>
      ));

  return element;
}

// PropTypes for type-checking the component's props
NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func.isRequired,
};

// Default props for the component
NotificationItem.defaultProps = {
  isLoggedIn: false,
  type: 'default',
}

export default NotificationItem;
