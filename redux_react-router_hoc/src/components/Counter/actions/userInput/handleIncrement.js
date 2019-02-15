import { INCREMENT } from '../actionType';

export default (e) => (dispatch) => {
  let value = + e.target.value + 1;

  dispatch({
    type: INCREMENT,
    payload: value
  });
};