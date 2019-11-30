import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import loansReducer from "./loans-reducer";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    loansPage: loansReducer,
    form: formReducer
});

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));
export default store;