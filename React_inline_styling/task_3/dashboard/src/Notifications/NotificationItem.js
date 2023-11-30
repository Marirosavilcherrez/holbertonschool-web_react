// Notificationitem.js
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite'

// NotificationItem functional component that displays a notification
//Pure component using react.memo it will only update when its props and state are different
const NotificationItem = React.memo(({ type, html, value, markAsRead }) => {
  let element;
  let selectTypeStyle = css(type === "urgent" ? styles.urgent : styles.default)

  // Conditional rendering based on the existence of 'value'
  value 
    ? (element = (
        <li className={selectTypeStyle}
          data-notification-type={type}
          // Click handler to mark the notification as read
          onClick={markAsRead}
        >
          {value}
        </li>
      ))
    : (element = (
        <li className={selectTypeStyle}
          data-notification-type={type}
          // Render HTML content dangerously (handle with care)
          dangerouslySetInnerHTML={{__html: html}}
          // Click handler to mark the notification as read
          onClick={markAsRead}
        ></li>
      ));

  return element;
});

const styles = StyleSheet.create({
  default: {
    color: 'blue',
    width: '100%', // Take the entire screen width
    fontSize: '20px', // Set font size to 20px
    padding: '10px 8px', // Set padding to 10px top/bottom and 8px left/right
    borderBottom: '2px solid black', // Display a black border at the bottom
  },

  urgent: {
    color: 'red',
    width: '100%', // Take the entire screen width
    fontSize: '20px', // Set font size to 20px
    padding: '10px 8px', // Set padding to 10px top/bottom and 8px left/right
    borderBottom: '2px solid black', // Display a black border at the bottom
  },

  // Media query for large screens
  '@media (min-width: 900px)': {
    default: {
      width: '50%', // Adjust width for better readability on large screens
    },

    urgent: {
      width: '50%', // Adjust width for better readability on large screens
    },
  },
});

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
