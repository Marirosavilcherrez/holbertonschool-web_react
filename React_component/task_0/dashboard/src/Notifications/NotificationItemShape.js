import PropTypes from 'prop-types';

const listNotifications = {
    id: PropTypes.number.isRequired,
    html: PropTypes.shape({
        __html: PropTypes.string.isRequired
    }).isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
}

export default listNotifications;