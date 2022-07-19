import PropTypes from 'prop-types';
import Notification from '../../components/Notification/Notification';
import { Title } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
	return (
		<>
			{total > 0 ? (
				<div>
					<Title>Good: {good}</Title>
					<Title>Neutral: {neutral}</Title>
					<Title>Bad: {bad}</Title>
					<Title>Total: {total}</Title>
					<Title>Positive Feedback: {positivePercentage}%</Title>
				</div>
			) : (
				<Notification message="No feedback given" />
			)}
		</>
	);
};
Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number,
	positivePercentage: PropTypes.number,
};
Statistics.defaultProps = {
	total: 0,
	positivePercentage: 0,
};
export default Statistics;
