import http from '../services/utils/http';

class JambResult {
    constructor(http){
        this.request = http;
    }
    updateJambResult(jamb){
        return this.request.post('jamb-result/update',jamb);
    }
    myJambResult(){ 
        return this.request.get('my-jamb-result');
    }
}
export default new JambResult(http);