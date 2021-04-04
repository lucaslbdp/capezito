import * as actionTypes from "./authorizationConstants";
import { checkToken, login } from "../../services/authorization/authorizationServices";

const executeLogin = (loginInfo) => {
    return (dispatch) => {
        
        dispatch(executeLoginStart());

        login(loginInfo, (response) => {

            sessionStorage.setItem("token", response.data.token);
            const user = {
                ...response.data,
            };

            dispatch(executeLoginSuccess(user));

            return window.location.replace("/");

        }, (error) => {

            dispatch(executeLoginFail(error));

        });
    };
};

const executeLoginStart = () => {
    return {
        type: actionTypes.LOGIN_START,
    };
};

const executeLoginSuccess = (userInfo) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        userInfo,
    };
};

const executeLoginFail = (error) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        error,
    };
};

const verifyToken = () => {
    return (dispatch) => {
        checkToken((response) => {
            sessionStorage.setItem("token", response.data);
        }, (error) => {
            dispatch(logout());
            window.location.reload();
        });
    };
};

const logout = () => {
    sessionStorage.clear();
    window.location.replace("/login");
    window.location.reload();
    return {
        type: actionTypes.LOGOUT,
    };
};

export { executeLogin, logout, verifyToken };
