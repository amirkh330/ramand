import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { MainReducer } from "../Reducer/MainReducer";

let store = createStore(MainReducer, applyMiddleware(thunk));
export default store;
