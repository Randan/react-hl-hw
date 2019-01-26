import { INCREMENT } from '../actionType';

export default (e) => (dispatch) => {
  const value = e.target.value;

  dispatch({
    type: INCREMENT,
    payload: value
  });
};