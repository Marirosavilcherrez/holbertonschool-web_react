// Notificationitem.js
import React from 'react';

const NotificationItem = ({type, html, value}) => {
    return (
        <li data-Notification-type={type} dangerouslySetInnerHTML={{__html:html}}>
            {value}
        </li>
    )
}

export default NotificationItem;