

export default class ApiUrl{

    static baseUrl = 'http://127.0.0.1:8000/api/'

    static loginUrl = this.baseUrl + 'login';

    static storeMessage = this.baseUrl + 'storeMessage'
    static getMessages = this.baseUrl + 'getMessages'

}