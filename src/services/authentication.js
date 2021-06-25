import http from '../services/utils/http';
class Auth {
    constructor(http){
        this.request = http;
        this.isAuthenticated = false;
    }
    setActiveToken(token) {
        this.isAuthenticated = true;
        this.activeToken = token;
        localStorage.setItem("_au_si_", this.activeToken);
    }

    signin(data) {
        return this.request.post("auth/signin", data);
    }

    signupStudent(data) {
        return this.request.post("auth/signup-student", data);
    }

    getAuthenticatedUser() {
        return this.request.get("/user", this.getActiveToken());
    }

    logout() {
        this.isAuthenticated = false;
        localStorage.removeItem("_au_si_"); //token
        localStorage.removeItem("_us_d_si"); //user
        this.activeToken = "";
    }
}

export default new Auth(http);