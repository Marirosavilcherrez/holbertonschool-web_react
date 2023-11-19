/* Notifications.js */
/* Function that return a notification function */
import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from '../utils/utils';

function Notifications(){
  return (
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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
    </div>
)}

export default Notifications;