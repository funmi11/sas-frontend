<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-md-6 mb-3">
                <div class="card text-left">
                    <img class="card-img-top " src="../../assets/auth.jpg" alt="" style="width:100px">
             <form @submit.prevent="signin">
                 <div v-if="errorAvailable" class="alert alert-danger alert-dismissible fade show" role="alert">
                    {{errorMsg}}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
             <div class="card-body">
               <h4 class="card-title">Login</h4>
               <span class="card-text">
                   
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
               
                <input v-model="user.param" type="text" class="form-control" id="staticEmail" placeholder="email@example.com">

                
                
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    
                    <input v-model="user.password" type="password" class="form-control" id="inputPassword">
                
                
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3 mt-3">Submit</button>
                </div>
                <router-link to="/signup">Register</router-link>
            
               </span>
             </div>
             </form>
           </div>     
            </div>    
        </div>           
    </div>
</template>
<script>
import AuthService from '../../services/authentication'
import UserService from '../../services/user'
    export default {
        name: 'SigninComponent',
        data(){
            return {
                isLoading: false,
                errorMsg: '',
                errorAvailable: false,
                user: {
                    param: '',
                    password: ''
                }
            }
        },
        methods: {
            signin(){
                AuthService.signin(this.user).then(res => {
                     this.isLoading = false;
                     console.log(res);
                    if(res.data.success){

                        if(res.data.roles[0].name === 'admin'){
                            AuthService.setActiveToken(res.data.accessToken);
                            UserService.setActiveUser(res.data);      
                            if(this.$route.query.redirect != null){
                                this.$router.replace(this.$route.query.redirect)
                                .catch(() => {
                                        // console.log(err)
                                    });
                            }else {
                                this.$router.replace("/admin-dashboard")
                                    .catch(() => {
                                        // console.log(err)
                                    });
                            }                  
                        }else if(res.data.roles[0].name === 'student'){
                            AuthService.setActiveToken(res.data.accessToken);
                            UserService.setActiveUser(res.data);      
                            if(this.$route.query.redirect != null){
                                this.$router.replace(this.$route.query.redirect)
                                .catch(() => {
                                        // console.log(err)
                                    });
                            }else {
                                this.$router.replace("/student-dashboard")
                                    .catch(() => {
                                        // console.log(err)
                                    });
                            }                  
                        }
                        
                    }else {
                        //failure from the backend to register
                        this.errorAvailable = true;
                        this.errorMsg = 'Invalid Credentials'
                    }

                }).catch(() => {

                });
            }
        }
    }
</script>
<style scoped>
#navlink {
    color: white;
}
</style>
