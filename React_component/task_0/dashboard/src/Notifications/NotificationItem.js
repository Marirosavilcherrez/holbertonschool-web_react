// Notificationitem.js
import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({type, html, value}) => {
    let element;
        value ?
        (element = <li data-notification-type={type}>{value}</li>)
        : (element = (<li data-notification-type={type} dangerouslySetInnerHTML={html}></li>)
        );
        return element;
}

NotificationItem.propTypes = {
    html: PropTypes.shape({
        __html:PropTypes.string,
    }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
  };
  
NotificationItem.defaultProps = {
    isLoggedIn: false,
    type: 'default',
}

export default NotificationItem;
