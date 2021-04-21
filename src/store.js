import { createStore, combineReducers } from 'redux';
import { toDos } from './components/reducers';

const reduceers = {
    toDos
};

const rootReducer = combineReducers(reduceers);

export const configureStore = () => createStore(rootReducer);