import http from "./utils/http";
//import userService from  '../services/user';

class Auth {
    constructor(http){
        this.request = http;
        this.isAuthenticated = false;
        console.log("about to log request");
        console.log(this.request);
    }


    // setActiveToken(token) {
    //     this.isAuthenticated = true;
    //     this.activeToken = token;
    //     localStorage.setItem("_au_si_", this.activeToken);
    // }

    // getActiveToken() {
    //     // return this.activeToken;
    //     return localStorage.getItem("_au_si_");
    // }

    // signin(data) {
    //     return this.request.post("login", data);
    // }

    // signup(data) {
    //     return this.request.post("register", data);
    // }

    // getAuthenticatedUser() {
    //     return this.request.get("/user", this.getActiveToken());
    // }

    // logout() {
    //     this.isAuthenticated = false;
    //     localStorage.removeItem("_au_si_"); //token
    //     localStorage.removeItem("_us_d_si"); //user
    //     this.activeToken = "";
    // }
}
export default new Auth(http);