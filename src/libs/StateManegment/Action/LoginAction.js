import { LOGIN_SUCCESS } from "../Reducer/MainReducer";
import store from "../Store/store";


export const LoginSuccess = (username) => {

  store.dispatch({type:LOGIN_SUCCESS,data:username});
};


