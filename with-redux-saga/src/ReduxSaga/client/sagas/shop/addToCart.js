import { put, select, delay, takeLatest } from 'redux-saga/effects';
import { ADD_TO_CART, ADD_TO_CART_SUCCESS } from '../../actions/actionTypes';

function* addToCart({ id }) {
  const {
    shop: { items }
  } = yield select();

  yield delay(1000);

  yield put({
    type: ADD_TO_CART_SUCCESS,
    item: items.find(item => item.id === id)
  });
}

export function* watchAddingToCart() {
  yield takeLatest(ADD_TO_CART, addToCart);
}