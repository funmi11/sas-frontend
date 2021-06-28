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
         if(to.matched.some(record => record.meta.forAdmin)){
            let userRole = UserService.getActiveUser().roles;
            let previousRoute = from;
            console.log(userRole);
            if(userRole[0].name == 'admin'){
              next();
              return;
          }else {
                next(previousRoute.fullPath);

            }
        }
        else if(to.matched.some(record => record.meta.forStudent)){
              let userRole = UserService.getActiveUser().roles;
            //   console.log(userRole);
              let previousRoute = from;
              if(userRole[0].name == 'student'){
                  next();
                  return;
              }else {
                  next(previousRoute.fullPath)
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