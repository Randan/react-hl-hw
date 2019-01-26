import { INCREMENT } from '../actionType';

export default (e) => (dispatch) => {
  let value = e.target.value;

  dispatch({
    type: INCREMENT,
    payload: ++value
  });
};