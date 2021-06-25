import http from "./utils/http";
// import url from './url'
//import userService from  '../services/user';

class Message {
    constructor(http){
        this.request = http;
    }
    send(data) {
        return this.request.post("contact/create-message", data);
    }
    get(url){
        return this.request.get(url);
    }
}
export default new Message(http);