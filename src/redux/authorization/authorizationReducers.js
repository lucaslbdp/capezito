import { updateObject } from "../utilities";
import * as actionTypes from "./authorizationConstants";

const initialState = {
  userInfo: {
    userName: "",
    token: "",
    email: "",
    roles: [],
    loading: false,
    error: null,
  },
};

//#region login
const executeLoginStart = (state) => {
  return updateObject(state, {
    userInfo: updateObject(state.userInfo, {
      userName: "",
      token: "",
      email: "",
      roles: [],
      loading: true,
      error: null,
    }),
  });
};

const executeLoginSuccess = (state, userInfo) => {
  return updateObject(state, {
    userInfo: updateObject(state.userInfo, {
      userName: userInfo.userName,
      token: userInfo.token,
      email: userInfo.email,
      roles: userInfo.roles,
      loading: false,
      error: null,
    }),
  });
};

const executeLoginFail = (state, error) => {
  return updateObject(state, {
    userInfo: updateObject(state.userInfo, {
      loading: false,
      error: error,
    }),
  });
};
//#endregion

//#region logout
const logout = (state) => {
  return updateObject(state, {
    userInfo: updateObject(state.userInfo, {
      userName: "",
      token: "",
      email: "",
      roles: [],
      loading: false,
      error: null,
    }),
  });
};
//#endregion

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_START:
      return executeLoginStart(state);
    case actionTypes.LOGIN_SUCCESS:
      return executeLoginSuccess(state, action.userInfo);
    case actionTypes.LOGIN_FAIL:
      return executeLoginFail(state, action.error);

    case actionTypes.LOGOUT:
      return logout(state);

    default:
      return state;
  }
};

export default authReducer;