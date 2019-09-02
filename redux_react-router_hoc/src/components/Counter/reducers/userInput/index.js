import { USER_TYPES, INCREMENT, DECREMENT } from '../../actions/actionType';

const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_TYPES:
      return action.payload;
    case INCREMENT:
      return action.payload;
    case DECREMENT:
      return action.payload;
    default:
      return state;
  }
};