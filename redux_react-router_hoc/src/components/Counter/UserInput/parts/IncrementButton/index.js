import { connect } from 'react-redux';
import IncrementButton from './IncrementButton';
import handleIncrement from '../../../actions/userInput/handleIncrement';

export default connect(
    (state) => ({
        userInput: state.userInput
    }), {
        handleIncrement
    }
)(IncrementButton);