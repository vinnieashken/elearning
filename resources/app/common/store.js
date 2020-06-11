import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import defaultReducer from "./reducers";
import academyReducer from "./reducers/acadmy";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    default: defaultReducer,
    academy: academyReducer,
})

const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(thunk))
);

export default store;
