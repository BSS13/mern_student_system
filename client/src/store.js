import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState={};
const middleware=[thunk];
const composeEnhancers=window.__REDUX__DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const store=createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;