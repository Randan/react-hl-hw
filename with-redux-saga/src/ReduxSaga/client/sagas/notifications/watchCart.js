import { takeEvery } from 'redux-saga/effects';
import { ADD_TO_CART_SUCCESS } from '../../actions/actionTypes';

function* notificate({ item }) {
  yield console.log(`You've added ${item.name} to cart`);
}

export function* notificateCart() {
  yield takeEvery(ADD_TO_CART_SUCCESS, notificate);
}