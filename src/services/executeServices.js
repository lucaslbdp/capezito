import axios from 'axios'

const URL_API = 'https://localhost:5001/api';

const executeService = (data, endpoint, method) => {
    const auhtStr = '';
    const request = {
        method,
        url: `${URL_API}${endpoint}`,
        headers: {
            "Content-Type": "application/json",
            Authorization: auhtStr,
        },
    };
    
    if (data && method === "POST") {
        request.data = data;
    }

    if (data && method === "GET") {
        request.params = data;
    }

    return axios(request).then((response) => {
        return response;
    });
}

