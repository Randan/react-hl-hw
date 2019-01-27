import { put, select, takeLatest } from 'redux-saga/effects';
import { REMOVE_FROM_CART, REMOVE_FROM_CART_SUCCESS } from '../../actions/actionTypes';

function* removeFromCart({ id }) {
  const {
    shop: { cart }
  } = yield select();

  yield put({
    type: REMOVE_FROM_CART_SUCCESS,
    cart: cart.filter(item => item.id !== id)
  });
}

export function* watchRemovingFromCart() {
  yield takeLatest(REMOVE_FROM_CART, removeFromCart);
}