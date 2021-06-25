<template>
    <div class="container">
        <form @submit.prevent="submitResult">
            <div class="row" v-for="(result,index) in results" :key="index">
                <div class="col-md-6">
                    <div class="form-group">
                    <label for="Subject">Subject</label>
                    <select v-model="result.subjectId" class="form-control" name="" id="">
                        <option :value="sub.id" v-for="sub in subjects" :key="sub.id">{{sub.name}}</option>
                    </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                    <label for="Score">Score</label>
                    <input type="number" v-model="results[index].score"
                        class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
                    <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 ml-3">
                    <button type="button" class="btn btn-primary" @click="moreResult()">Add More Result</button>
                </div>
                <div class="col-md-6">
                    <button type="submit" class="btn btn-primary" v-if="!isLoading">Submit</button>
                    <div class="spinner-border" role="status" v-if="isLoading">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import SubjectService from '../../services/subject'
import JambService from '../../services/jamb'

export default {
    name: 'JambComponent',
    data(){
        return {
            isLoading: false,
            subjects: [],

            results: [
                {
                    subjectName: '',
                    subjectId: '',
                    score: ''
                },
            ]
        }
    },
    created(){
            this.getSubject();
            this.getResult();
    },
    methods: {
        moreResult(){
            if(this.results.length < 4){
                this.results.push(
                    {
                        subjectName: '',
                        subjectId: '',
                        score: ''
                    }
                );
            }
            
        },
        getResult(){
            this.isLoading = true;
            JambService.myJambResult().then(res => {
                this.isLoading = false;
                console.log(res);
                if(res.data.result.length >= 1){
                    this.results=[];
                    res.data.result.forEach(result => {
                    this.results.push({
                        subjectName: result.name,
                        subjectId: result.subjectId,
                        score: result.score
                        });
                    });
                }
                
               
            }).catch(err => {
                this.isLoading = false;
                console.log(err);
            })
        },
        submitResult(){
            this.isLoading = true;
            JambService.updateJambResult(JSON.stringify({'result': JSON.stringify(this.results)}))
                .then(res => {
                    this.isLoading = false;
                    console.log(res);
                }).catch(err => {
                    this.isLoading = false;
                    console.log(err)
                })
        },
        getSubject(){
            this.isLoading = true;
            SubjectService.subjects().then(res =>{
                this.isLoading = false;
                this.subjects = res.data.subjects.rows;
                console.log(res);
            }).catch(err => {
                this.isLoading = false;
                console.log(err);
            })
        }
    }
}
</script>
