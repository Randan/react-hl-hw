import { DECREMENT } from '../actionType';

export default (e) => (dispatch) => {
  let value = e.target.value;

  dispatch({
    type: DECREMENT,
    payload: --value
  });
};