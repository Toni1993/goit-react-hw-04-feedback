import PropTypes from 'prop-types';
import { Title } from './Notification.styled';

const Notification = ({ message }) => {
	return <Title>{message}</Title>;
};
Notification.propTypes = {
	message: PropTypes.string,
};
Notification.defaultProps = {
	message: '',
};

export default Notification;
