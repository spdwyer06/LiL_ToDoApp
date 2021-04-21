import { createStore, combineReducers } from 'redux';
import { toDos } from './components/reducers';

const reducers = {
    toDos
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);