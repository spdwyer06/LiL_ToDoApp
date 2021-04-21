import { createStore, combineReducers } from 'redux';

const reduceers = {};

const rootReducer = combineReducers(reduceers);

export const configureStore = () => createStore(rootReducer);