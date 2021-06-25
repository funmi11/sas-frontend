import http from '../services/utils/http'

class Subject {
    constructor(http){
        this.request = http;
    }
    subjects(){
        return this.request.get('subjects');
    }
}

export default new Subject(http);