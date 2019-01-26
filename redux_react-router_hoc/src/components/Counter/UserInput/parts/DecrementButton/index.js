import { connect } from 'react-redux';
import DecrementButton from './DecrementButton';
import handleDecrement from '../../../actions/userInput/handleDecrement';

export default connect(
    (state) => ({
        userInput: state.userInput
    }), {
        handleDecrement
    }
)(DecrementButton);