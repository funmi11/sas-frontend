import http from '../services/utils/http';

class OlevelResult {
    constructor(http){
        this.request = http;
    }
    updateOlevelResult(olevel){
        return this.request.post('olevel/update',olevel);
    }
    myOlevelResult(){
        return this.request.get('my-olevel');
    }
    olevel(){
        
    }
}
export default new OlevelResult(http);