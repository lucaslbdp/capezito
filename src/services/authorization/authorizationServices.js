import executeService from '../executeServices'

export const login = (data, success, error) => {
    executeService(endPoints.LOGIN, "POST", data).then(success).catch(error);
}

export const createUser = (data, success, error) => {
    executeService(endPoints.LOGIN, "POST", data).then(success).catch(error);
}