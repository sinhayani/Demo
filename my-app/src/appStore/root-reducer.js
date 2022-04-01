import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage'; // storage = localStorage or sessionStorage = sessionStorage
import { persistReducer } from 'redux-persist';

import ListReducer from './reducers/listObject';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['listObject']
}

const rootReducer = combineReducers({
    listObject: ListReducer

});

export default persistReducer(persistConfig, rootReducer);