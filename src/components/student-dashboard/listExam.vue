<template>
    <div class="container">
        <div class="row">
            <div class="col md-6">
                   <div class="spinner-border" role="status" v-if="isLoading">
                        <span class="visually-hidden">Loading...</span>
                    </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table class="table">
                    <thead>
                        <tr>
                            <td>S/N</td>
                            <th>Registration NO</th>
                            <th>Exam Name</th>
                            <th>Exam Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(exam, index) in exams" :key="index">
                            <td>{{index + 1}}</td>
                            <td scope="row">{{exam.registringNo}}</td>
                            <td>{{exam.examName}}</td>
                            <td>{{exam.examYear}}</td>
                            <td>
                                
                                <button @click="gotoOleve(exam.id)" type="button" class="btn btn-primary">
                                    Add result </button>
                                    
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import ExamService from '../../services/exam';

export default {
    name: 'ListExamComponent',
    data(){
        return {
            isLoading: false,
            exams: [
                {
                    registrationNo: '',
                    examName: '',
                    examYear: ''
                }
            ]
        }
    },
    created(){
        this.getExams();
    },
    methods: {
        gotoOleve(id){
             this.$router.push({name: 'dashboard.olevel', param: id})
                .catch(() => {
                    // console.log(err)
                });
},
        getExams(){
            console.log('fsjsdlkfj');
            this.isLoading = true;
            ExamService.getExams().then(res => {
                this.isLoading = false;
                console.log(res);
                this.exams = res.data.result.rows;
            }).catch(err => {
                this.isLoading = false;
                console.log(err)
            } )
        }
    }
}
</script>