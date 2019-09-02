import { connect } from 'react-redux';
import InputField from './InputField';
import handleInputChange from '../../../actions/userInput/handleInputChange';

export default connect(
    (state) => ({
        userInput: state.userInput
    }), {
        handleInputChange
    }
)(InputField);