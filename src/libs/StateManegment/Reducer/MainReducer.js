
export const LOGIN_SUCCESS = "Login_success";

let initiolValue = {
  username: "",
};

export const MainReducer = (state = initiolValue, action) => {
  console.log(action.type);
  switch (action.type) {

    case LOGIN_SUCCESS:
      console.log(action);
      console.log("action");
      return { ...state,username:action.data };

    default:
      return { ...state };
  }
};
