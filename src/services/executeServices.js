import axios from 'axios'

const URL_API = 'https://localhost:5001/api';

const executeService = ( endpoint, method ,data ) => {
    const auhtStr = '';
    const request = {
        method,
        url: `${URL_API}${endpoint}`,
        headers: {
            "Content-Type": "application/json",
            Authorization: auhtStr,
        },
    };
    
    if (data && method === "POST" || method === "DELETE" || method === "PUT") {
        request.data = data;
    }

    if (data && method === "GET") {
        request.params = data;
    }
       
    return axios(request).then((response) => {
        return response;
    });
}

export default executeService;
