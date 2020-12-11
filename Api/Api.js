import Axios from "axios";

const base_url = 'https://accessale.nytrotech.net/api/v1/';

// const base_url = 'http://14ae0119904d.ngrok.io/api/v1/';

// const image_url = 'http://14ae0119904d.ngrok.io'
const image_url = 'https://accessale.nytrotech.net'

const registerApi = async (data) => {
    return await Axios.post(`${base_url}register`,data);
}

const loginApi = async (data) => {
    return await Axios.post(`${base_url}login`,data);
}

export {
    base_url,
    image_url,
    registerApi,
    loginApi
}
