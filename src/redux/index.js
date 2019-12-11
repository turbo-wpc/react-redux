import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import auth from './modules/auth';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore);

const reducer = combineReducers({
  auth
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;
