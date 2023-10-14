import { combineReducers, createStore, applyMiddleware } from "redux";
import accountReducer from "./accountSlice";
import customerReducer from "./customerSlice";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
