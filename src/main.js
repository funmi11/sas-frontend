import Vue from 'vue';
import App from './App.vue';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from './router';
import UserService from './services/user';
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if (to.matched.some(record => record.meta.forVisitors)) {

          next();
      
  } else if (to.matched.some(record => record.meta.forAuth)) {
      if (!localStorage.getItem("_au_si_")) {
          next({
              path: "/",
              query: { redirect: to.fullPath }
          });
      } else {
          // const authToken = localStorage.getItem('_au_si_');
          if(to.matched.some(record => record.meta.forStudent)){
              let userRole = UserService.getActiveUser().roles;
              console.log('rrrrrr');
              console.log(userRole);
            //   console.log(UserService.getActiveUser());
            //   console.log('ddd '  + userRole);
              let previousRoute = from;
              if(userRole[0].name == 'student'){
                  next();
                  return;
              }else {
                  next(previousRoute.fullPath)
              }

          }  else if(to.matched.some(record => record.meta.forAdmin)){
              let userRole = UserService.getActiveUser().roles;
              let previousRoute = from;
              if(userRole.includes('ROLE_ADMIN')){
                  next();
                  return;
              }else {
                  next(previousRoute.fullPath);

              }
          }           
      }
  } 
  else {
      {
          next();
      }
  }
});

new Vue({
  render: h => h(App),
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app');