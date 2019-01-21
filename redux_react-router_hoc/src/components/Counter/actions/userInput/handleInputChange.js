import { USER_TYPES } from '../actionType';

export default (e) => (dispatch) => {
  const value = e.target.value;

  dispatch({
    type: USER_TYPES,
    payload: value
  });
};