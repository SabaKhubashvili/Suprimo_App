import axios from 'axios';


export default class AxiosRequest {
    static getRequest = (getUrl) =>{
        return axios.get(getUrl)
    }
    static postRequest = (getUrl,Data) =>{
        return axios.post(getUrl,Data)
    }
}

