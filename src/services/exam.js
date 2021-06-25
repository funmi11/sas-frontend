import http from './utils/http';

class Exam{
    constructor(http){
        this.request = http;
    }
    createExam(data){
        return this.request.post('exam',data)
    }
    getExams(){
        return this.request.get('list-exam');
    }
}

export default new Exam(http);