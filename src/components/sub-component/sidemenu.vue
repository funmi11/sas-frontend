<template>
    <div>
        <div class="row">
                <!-- Sidear -->
                <div class="col-md-2 bg-light d-none d-md-block sidebar">
                    <div class="left-sidebar">
                                                
                        <ul class="nav flex-column sidebar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">
                            <svg class="bi bi-chevron-right" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" clip-rule="evenodd"/></svg>
                               <router-link to="/profile"> Profile </router-link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                            <svg class="bi bi-chevron-right" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" clip-rule="evenodd"/></svg>
                              <router-link to="/update-password"> update-password</router-link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                            <svg class="bi bi-chevron-right" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" clip-rule="evenodd"/></svg>
                                <router-link to='/jamb'>Jamb</router-link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                            <svg class="bi bi-chevron-right" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" clip-rule="evenodd"/></svg>
                                  <router-link to="/exam">Exam</router-link>  
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" @click="logout">
                            <svg class="bi bi-chevron-right" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" clip-rule="evenodd"/></svg>
                                Logout
                            </a>
                        </li>
                        </ul>
                    </div>
                </div> 
            </div>
    </div>
</template>
<script>
import AuthService from '../../services/authentication'
export default {
    name: 'SidemenuComponent',
    methods: {
        logout(){
            AuthService.logout();
            this.$router.replace("/auth")
                .catch(() => {
                    // console.log(err)
             });
        }
    }
}
</script>
<style scoped>
.form-control-primary {
  margin: 10px;
  opacity: 0.2;
  border-radius: 2px;
}
.sidebar {
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  z-index: 100;
  padding: 70px 0 0 10px;
  border-right: 1px solid #d3d3d3;
}

.left-sidebar {
  position: sticky;
  top:0;
  height: calc(100vh - 70px)
}

.sidebar-nav li .nav-link {
  color: #333;
  font-weight: 500;
}
main {
    /* margin-bottom: 20px; */
    position: absolute;
    left: 200px;
    padding-top: 90px;
    padding-left: 130px;
}
main .card {
  margin-bottom: 20px;
}
</style>
