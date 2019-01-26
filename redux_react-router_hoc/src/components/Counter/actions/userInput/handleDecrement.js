import { DECREMENT } from '../actionType';

export default (e) => (dispatch) => {
  const value = e.target.value;

  dispatch({
    type: DECREMENT,
    payload: value
  });
};