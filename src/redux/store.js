import { postListReducer } from './reducers/postListReducer';   
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { getNewsWatcher } from './saga/getNewsSaga';


const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(combineReducers({ postListReducer }), composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(getNewsWatcher)

