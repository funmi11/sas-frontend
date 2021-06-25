<template>
    <div class="container">
        <form @submit.prevent="postUpdatePassword">
            <div v-if="errorAvailable" class="alert alert-danger alert-dismissible fade show" role="alert">
                    {{errorMsg}}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Old Password</label>
                <input v-model="password.oldPassword" type="password" class="form-control" id="formGroupExampleInput" placeholder="">
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">New Password</label>
                <input v-model="password.newPassword" type="password" class="form-control" id="formGroupExampleInput2" placeholder="">
            </div>
            <button type="submit" class="btn btn-primary" v-if="!isLoading">Submit</button>
            <div class="spinner-border" role="status" v-if="isLoading">
                <span class="visually-hidden">Loading...</span>
            </div>    
        </form>
    </div>
</template>
<script>
import UserService from '../../services/user'
export default{
    name: 'UpdatePasswordComponent',
    data(){
        return {
            isLoading: false,
            errorMsg: '',
            errorAvailable: false,
            password: {
                newPassword: '',
                oldPassword: ''
            }
         }
    },
    created() {
        // this.getUpdatePassword();
    },
    methods: {
        // getUpdatePassword(){
        //     this.isLoading = true;
        //     UserService.fetchUpdatePassword().then(res => {
        //         this.isLoading = false;
        //         this.updatePassword = res.data.result;
        //         console.log(res);
        //     }).catch(err => {
        //         this.isLoading = false;
        //         console.log(err);
        //     })
        // },
        postUpdatePassword(){
            this.isLoading = true;
            UserService.updatePassword(this.password).then(res => {
                this.isLoading = false;
                console.log(res.data.success);
                if(!res.data.success){
                    this.errorAvailable = true;
                    this.errorMsg = res.data.message;
                }
                // this.updatePassword = res.data.result;
                console.log(res);
            }).catch(err => {
                this.isLoading = false;
                console.log(err);
                this.errorAvailable = true;
                this.errorMsg = "Opearation failed";
            })
        }
    }
}
</script>
<style scoped>

</style>
