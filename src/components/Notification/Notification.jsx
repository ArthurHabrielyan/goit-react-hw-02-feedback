import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <span className="notification">{message}</span>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
