import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { ButtonOption } from './FeedbackOptions.styled.js';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
	<div>
		{options.map(option => (
			<ButtonOption
				onClick={() => onLeaveFeedback(option)}
				type="button"
				key={uuidv4()}
			>
				{option}
			</ButtonOption>
		))}
	</div>
);

FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
