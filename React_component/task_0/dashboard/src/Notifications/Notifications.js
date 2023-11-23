/* Notifications.js */
/* Function that return a notification function */
import React from 'react';
import './Notifications.css';
import closeIcon from '../Assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape'

function Notifications({displayDrawer, listNotifications}){
  return (
    <>
    <div className ="menuItem">Your notifications</div>
    {displayDrawer=== true ? (
    <div className ="Notifications">
      <button 
        style= {{
          position: 'absolute',
          top: '15px',
          right: '15px',
          background: '#ffff',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label = "Close"  onClick={() => console.log('Close button has been clicked')}>
        <img src={closeIcon} alt="Icon" />
        </button>
      <p>Here is the list of notifications</p>

      {listNotifications.lenght === 0 ? (
      <table>
        <thead>
          <tr>
            <td>No new notification for now</td>
          </tr>
        </thead>
      </table>
      ) : (
      <ul>
        {listNotifications.map(notification =>(
          <NotificationItem
            key={notification.id}
            type={notification.type}
            value={notification.value}
            html={notification.html}
          />
        ))}
      </ul>
      )}
      </div>
    ) : <div></div>}
    </>
)}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}

export default Notifications;
