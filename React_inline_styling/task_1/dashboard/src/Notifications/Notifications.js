/* Notifications.js */
/* Function that returns a notification function */
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../Assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape'

class Notifications extends Component {
  constructor(props) {
    super(props);

    // Bind the markAsRead method to the current instance of the component
    this.markAsRead = this.markAsRead.bind(this);
  }
  // Method to mark a notification as read
  markAsRead (id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  // Implementing shouldComponentUpdate for performance optimization
  shouldComponentUpdate(nextProps) {
    // Solo actualiza el componente si la nueva lista de notificaciones es más larga
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() { 
    // Destructuring props for easier use
    const { displayDrawer, listNotifications } = this.props;
    
    return (
      <>
        <div className="menuItem">Your notifications</div>
        {/* Conditional rendering based on displayDrawer prop */}
        {displayDrawer === true ? (
          <div className={css(styles.NotificationStyle)}>
            <button 
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: '#ffff',
                border: 'none',
                cursor: 'pointer',
              }}
              aria-label="Close" 
              // Click handler for the close button
              onClick={() => console.log('Close button has been clicked')}
            >
              <img src={closeIcon} alt="Icon" />
            </button>
            <p>Here is the list of notifications</p>
            
            {/* Conditional rendering based on the length of listNotifications */}
            {listNotifications.length === 0 ? (
              <table>
                <thead>
                  <tr>
                    <td>No new notification for now</td>
                  </tr>
                </thead>
              </table>
            ) : (
              <ul>
                {/* Mapping through listNotifications to render NotificationItems */}
                {listNotifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    // Passing the markAsRead function as a prop to NotificationItem
                    markAsRead={() => this.markAsRead(notification.id)}
                  />
                ))}
              </ul>
            )}
          </div>
        ) : <div></div>}
      </>
    );
  }
}

const styles = StyleSheet.create({
  NotificationStyle: {
    border: '2px dashed red',
    paddingtop: '10px',
    paddingleft: '10px',

    "[data-notification-type:'default']": {
      color: 'blue',
    },
    
    "[data-notification-type:'urgent']": {
      color: 'red',
    }
  },
})

// PropTypes for type-checking the component's props
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  id: PropTypes.number,
};

// Default props for the component
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}

export default Notifications;
