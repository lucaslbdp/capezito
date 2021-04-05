import executeService from '../executeServices'
import * as endPoints from '../authorization/authorizationEndPointConstans'

export const login = (data, success, error) => {
    executeService(endPoints.LOGIN, "POST", data).then(success).catch(error);
}

export const createUser = (data, success, error) => {
    executeService(endPoints.CREATE, "POST", data).then(success).catch(error);
}

export const checkToken = (data, success, error) => {
    executeService(endPoints.LOGIN, "POST", data).then(success).catch(error);
}