<template>
   <div>
        <NavBarComponent></NavBarComponent>
        <div class="container-fluid">
            <SidemenuComponent></SidemenuComponent>
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                   <router-view></router-view> 
            </main>
        </div>
       
   </div>
</template>
<script>
import AuthService from '../../services/authentication';
import NavBarComponent from '../sub-component/nav.vue';
import SidemenuComponent from '../sub-component/sidemenu.vue';
export default {
    name: 'StudentPage',
    methods: {
        logout(){
            AuthService.logout();
             this.$router.replace("/auth");
        }
    },
    components: {
        NavBarComponent,
        SidemenuComponent
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