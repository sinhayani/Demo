import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk'
import persistReducer from './root-reducer';

const middlewares = [thunk];

export const store = createStore(persistReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistStore };