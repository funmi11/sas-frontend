<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-md-6 mb-3">
                <form @submit.prevent="register">
                <div class="card text-left">
                    <img class="card-img-top " src="../../assets/auth.jpg" alt="" style="width:100px">
             <div class="card-body">
               <h4 class="card-title">Login</h4>
               <span class="card-text">
                   
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
               
                <input v-model="user.email" type="email" class="form-control" id="staticEmail" placeholder="email@example.com">

                
                
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    
                    <input v-model="user.password" type="password" class="form-control" id="inputPassword">
                
                
                <div class="col-auto">
                    <button type="submit" v-if="!isLoading" class="btn btn-primary mb-3 mt-3">Submit</button>
                   <div class="spinner-border" role="status" v-if="isLoading">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                <router-link to="/auth">Login</router-link>
            
               </span>
             </div>
           </div>  
                </form>   
            </div>    
        </div>           
    </div>
</template>
<script>
    import AuthService from '../../services/authentication';
    import UserService from '../../services/user';

    export default {
        name: 'SignupComponent',
        data(){
            return {
                isLoading: false,
                report: '',
                user: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            register(){
                this.isLoading = true;
                AuthService.signupStudent(this.user).then(res => {
                    this.isLoading = false;
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
                    }

                }).catch(err => {
                    console.log(err);
                })
            }
        }
    }
</script>
<style scoped>
#navlink {
    color: white;
}
</style>
