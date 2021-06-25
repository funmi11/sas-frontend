<template>
    <div class="container">
        <form @submit.prevent="submit">
             <div class="row">
                 <div v-if="alert" class="alert alert-danger alert-dismissible fade show" role="alert">
                    {{message}}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                      <label for="Reg No">Exam Registration Number</label>
                      <input v-model="exam.registrationNo" type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Reg No</small>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                      <label for="Exam">Exam</label>
                      <select v-model="exam.examName" class="form-control" name="" id="">
                        <option value="NECO">NECO</option>
                        <option value="WAEC">WAEC</option>
                        <option value="NECO GC">NECO GC</option>
                      </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                      <label for="Date">Exam Date</label>
                      <input v-model="exam.examYear" type="date" class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                </div>
                <div class="col-md-6">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <router-link to="/list-exam">List My Exam</router-link>
                </div>
            </div>
        </form>
       
    </div>
</template>
<script>
import ExamService from '../../services/exam';

export default {
    name: 'ExamComponent',
    data(){
        return {
            alert: false,
            message: '',
            isLoading: false,
            exam: {
                registrationNo: '',
                examName: '',
                examYear: ''
            }
        }
    },
    methods: {
        submit(){
            console.log(this.exam);
            this.isLoading = true;
            ExamService.createExam(this.exam).then(res => {
                this.isLoading = false;
                console.log(res);
                this.message = res.data.message,
                this.alert = true;
            }).catch(err => {
                this.isLoading = false;
                console.log(err);
            })
        }
    }
}
</script>