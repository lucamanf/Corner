import { createStore, applyMiddleware } from "redux";
import { composeWhitDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWhitDevTools(applyMiddleware(...middleware))
);

export default store;
