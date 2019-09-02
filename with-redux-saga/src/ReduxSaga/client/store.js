import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducers';
import { watchItemsFetch } from './sagas/shop/fetchItems';
import { watchAddingToFavorites } from './sagas/shop/addToFavorites';
import { notificateFavorite } from './sagas/notifications/watchFavorites';
import { watchRemovingFromFavorites } from './sagas/shop/removeFromFavorites';
import { watchAddingToCart } from './sagas/shop/addToCart';
import { notificateCart } from './sagas/notifications/watchCart';
import { watchRemovingFromCart } from './sagas/shop/removeFromCart';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

function* rootSaga() {
  yield all([
    watchItemsFetch(),
    watchAddingToFavorites(),
    notificateFavorite(),
    watchRemovingFromFavorites(),
    watchAddingToCart(),
    notificateCart(),
    watchRemovingFromCart()
  ]);
}

sagaMiddleware.run(rootSaga);
