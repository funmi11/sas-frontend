<template>
    <div class="container">
        <form @submit.prevent="submitOlevel">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="ExamId">Exam Registration Number</label>
                        <input type="" v-model="olevel.examId"
                            class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
                        <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                </div> 
                <div class="col-md-6">
                    <label for="Sitting">Sitting</label>
                    <select v-model="olevel.sitting" class="form-control" name="" id="">
                        <option>1 sitting</option>
                        <option>2 sitting</option>
                    </select>
                </div>  
            </div>
            <div class="row" v-for="(eachSubject,index) in olevel.result" :key="index">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="Subject">Subject</label>
                        <select v-model="eachSubject.subjectId" class="form-control" name="" id="">
                            <option :value="sub.name" v-for="sub in subjects" :key="sub.id">{{sub.name}}</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="Grade">Grade</label>
                        <select v-model="olevel.result[index].grade" name="" id="" class="form-control">
                            <option value="A1">A1</option>
                            <option value="B2">B2</option>
                            <option value="C4">C4</option>
                        </select>
                        <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                </div>        
            </div>
            <div class="row">
                <div class="col-md-6 ml-3">
                    <button type="button" class="btn btn-primary" @click="moreResult()">Add more Result</button>
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
import OlevelService from '../../services/olevel'

export default {
    name: 'OlevelComponent',
    data(){
      return {
          isLoading: false,
          subjects: [],
          olevel:{
              sitting: '',
              examId: '',
              result: [
                {
                    subjectId: '',
                    grade: ''
                },
            ]
          }

      }  
    },
    created(){
        this.getOlevel();
        this.getSubject();
    },
    methods: {
        moreResult(){
            console.log(this.olevel);
            if(this.olevel.result.length < 17){
                this.olevel.result.push(
                    {
                        subjectId: '',
                        grade: ''
                    }
                );
            }
        },
        submitOlevel(){
            this.isLoading = true;
            OlevelService.updateOlevelResult(JSON.stringify({'result': JSON.stringify(this.olevel)}))
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
            SubjectService.subjects().then(res => {
                this.isLoading = false;
                console.log(res);
                this.subjects = res.data.subjects.rows;
            }).catch(err => {
                this.isLoading = false;
                console.log(err);
            })
        },
        
        getOlevel(){
            // this.isLoading= true;
            // OlevelService.olevel().then(res =>{
            //     this.isLoading= false;
            //     this.olevel = res.data.olevel.rows;
            //     console.log(res);
            // }).catch(err=>{
            //     this.isLoading = false;
            //     console.log(err);
            // })
        }
    }
}
</script>
<style scoped>
    
</style>