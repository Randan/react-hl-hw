import { connect } from 'react-redux';
import UserInput from './UserInput';
import handleInputChange from '../actions/userInput/handleInputChange';
import handleIncrement from '../actions/userInput/handleIncrement';
import handleDecrement from '../actions/userInput/handleDecrement';

export default connect(
    null, {
        handleInputChange,
        handleIncrement,
        handleDecrement
    }
)(UserInput);