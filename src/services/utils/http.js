import Axios from "axios";
import AuthService from '../auth'
import url from '../url'

class Http{
  constructor(baseURL = url.sasUrl){
    let token = this.getActiveToken();
    console.log('token about to log out');
    console.log(token);
    this.http  = Axios.create({
      baseURL: baseURL,
      //withCredentials: false,
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          "X-Requested-With": "XMLHttpRequest",
          "Access-Control-Allow-Origin": "*",
          'x-access-token':`${token}`
          // Authorization:`Bearer ${token}`
      },
    }); 

    //before a request is made start the nprogress
    this.http.interceptors.request.use(request => this.requestHandler(request));
    
    this.http.interceptors.response.use(
        response => this.successHandler(response),
        error => this.errorHandler(error)
      )
    
    this.http.interceptors.response.use(undefined, function (err) {
      return new Promise(function () {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          localStorage.removeItem("_au_si_"); //token
          localStorage.removeItem("_us_d_si"); //user
        }else {AuthService.isAuthenticated == true}
        throw err;
      });
    });
  }

  getActiveToken(){
    // if(localStorage.getItem("_au_si_")){
    //     let data = localStorage.getItem("_au_si_");
    //     return data.slice(1,data.length - 1);
    // }
    // return '';
    return localStorage.getItem("_au_si_");
  }
   
  isHandlerEnabled(config={}) {
      //return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ? 
      return config['handlerEnabled'] && !config.handlerEnabled ?
        false : true
    }
  
  
  //console.log(token);
  // create an new axios http instance
 
  
  requestHandler(request) {
    if (this.isHandlerEnabled(request)) {
      // Modify request here
      let tok = this.getActiveToken();
      request.headers['Authorization'] = `Bearer ${tok}`;
    }
    return request
  }
    
  errorHandler(error) {
    if (this.isHandlerEnabled(error.config)) {
      // Handle errors
    }
    return Promise.reject({ ...error })
  }
    
  successHandler(response) {
    if (this.isHandlerEnabled(response.config)) {
      // Handle responses
    }
    return response
  }
    
}
export default new Http().http

// const base_url = http.defaults.baseURL;
