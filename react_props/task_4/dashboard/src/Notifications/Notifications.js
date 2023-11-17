/* Notifications.js */
/* Function that return a notification function */
import React from 'react';
import './Notifications.css';
import closeIcon from '../close-icon.png';
import { getLatestNotification } from '../utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

function Notifications(displayDrawer){
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
      <ul>
        <NotificationItem type="default" value = "New course available" />
        <NotificationItem type="urgent" value = "New resume available" />
        <NotificationItem type="urgent" html={{__html: getLatestNotification()}} />
      </ul>
    </div>
    ) : <div></div>}
    </>
)}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
}

export default Notifications;
