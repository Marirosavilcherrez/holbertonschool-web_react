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
        <div className={css(styles.menuItem)}>Your notifications</div>
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

const opacacityFrames = {
  'from': {
    opacity: 0.5,
  },
  'to': {
    opacity: 1,
  }};

const bounceFrames = {
  '0%, 100%': {
    transform: 'translateY(0)',
  },

  '50%': {
      transform: 'translateY(-5px)',  
  },
}

const styles = StyleSheet.create({
  NotificationStyle: {
    border: '2px dashed red',
    paddingTop: '10px',
    paddingLeft: '10px',
    fontSize: '20px', 

    "[data-notification-type='default']": {
      color: 'blue',
    },
    
    "[data-notification-type='urgent']": {
      color: 'red',
    },

    '@media (min-width: 900px)': {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      zIndex: 1000,
      padding: '20px', 
    },
  },

  menuItem: {
    textAlign: 'right',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    position: 'fixed',
    top: 0,
    right: 0,
    padding: '10px',
    zIndex: 1000,
    ':hover': {
      animationName: [opacacityFrames, bounceFrames],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3, 3',
      animationDelay: '0s, 0.5s',
      animationFillMode: 'forwards',
    },
  },  
});

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
