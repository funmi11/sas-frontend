import http from "./utils/http";
import { cipher, decipher } from "./utils/encryption";

class User {
    constructor(http) {
        this.request = http;
    }

    getActiveToken() {
        return localStorage.getItem("_au_si_");
    }
    setActiveUser(user) {
        this.activeUser = user;
        // encript user data
        const myCipher = cipher("mySecretSalt");
        // console.log(userToken);
        var s_u = JSON.stringify(this.activeUser);
        const n_c = myCipher(s_u);
        //  console.log(n_c);
        localStorage.setItem("_us_d_si", n_c);
    }
    getActiveUser() {
        if (localStorage.getItem("_us_d_si")) {
            // decription instance
            const myDecipher = decipher("mySecretSalt");
            // console.log(myDecipher(localStorage.getItem('_us_d_si')));
            // decript user data from local storage
            const userData = myDecipher(localStorage.getItem("_us_d_si"));
            this.activeUser = JSON.parse(userData);
            // this.activeUser = localStorage.getItem('_us_d_si');
            return this.activeUser;
        }
         return '';

    }
    fetchProfile(){
        return this.request.get('user/profile/get')
    }
    updateProfile(data){
        return this.request.post('user/profile/update',data)
    }
    updateUserProfile(user){
      return this.request.post('user/profile/update', user);
    }
    fetchUpdatePassword(){
        return this.request.get('user/update-password/get')
    }
    updatePassword(data){
        return this.request.post('auth/update-password',data)
    }    

    changePassword(user_id, data) {
        return this.request.post(
            "/change-password/" + user_id + "?token=" + this.getActiveToken(),
            data
        );
    }
}

export default new User(http);
