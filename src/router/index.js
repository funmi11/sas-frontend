import Vue from 'vue'
import Router from 'vue-router'

//home
import HomePage from '@/components/home/page'
import AboutComponent from '@/components/home/about'
import ContactComponent from '@/components/home/contact'
import IndexComponent from '@/components/home/index'

//auth
import SigninComponent from '@/components/authentication/signin'
import SignupComponent from '@/components/authentication/signup'
import AuthenticationPage from '@/components/authentication/page'

//student dashboard
import StudentDashboardPage from '@/components/student-dashboard/page'
import StudentDashboardComponet from '@/components/student-dashboard/dashboard'
import ProfileComponet from '@/components/student-dashboard/profile'
import UpdatePasswordComponent from '@/components/student-dashboard/update-password'
import JambComponent from '@/components/student-dashboard/jamb'
import OlevelComponent from '@/components/student-dashboard/olevel'
import ExamComponent from '@/components/student-dashboard/exam'
import ListExamComponent from '@/components/student-dashboard/listExam'



Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
            meta: {
                forVisitor: true,
            },
            children: [
                {
                    path: "/",
                    name: "home.index",
                    component: IndexComponent,
                    meta: {
                        forVisitor: true
                    },
                },
                {
                    path: "/about",
                    name: "about",
                    component: AboutComponent,
                    meta: {
                        forVisitor: true
                    },
                },
                {
                    path: "/contact",
                    name: "contact",
                    component: ContactComponent,
                    meta: {
                        forVisitor: true
                    },
                },
            ]
        },
        {
            path: "/auth",
            name: "authentication",
            component: AuthenticationPage,
            meta: {
                forVisitor: true,
                forAuth: false,
                // forAdmin: false,
                // forStudent: false
            },
            children: [
                {
                    path: "/",
                    name: "signin",
                    component: SigninComponent,
                    meta: {
                        forVisitor: true,
                        // forAuth: false,
                        // forAdmin: false,
                        // forStudent: false
                    },
                },
                {
                    path: "/signup",
                    name: 'signup',
                    component: SignupComponent,
                    meta: {
                        forVisitor: true,
                        // forAuth: false,
                        // forAdmin: false,
                        // forStudent: false
                    },
                },
    
            ]
        },
        {
            path: "/student-dashboard",
            name: "student",
            component: StudentDashboardPage,
            meta: {
                // forVisitor: false,
                // forAuth: true,
                   forStudent: true,
                // forAdmin: false
            },
            children: [
                {
                    path: "/",
                    name: "dashboard",
                    component: StudentDashboardComponet,
                      meta: {
                        // forVisitor: false,
                        // forAuth: true,
                        forStudent: true,
                        // forAdmin: false
                    },
                },
                {
                    path: "/profile",
                    name: "dashboard",
                    component: ProfileComponet,
                      meta: {
                        // forVisitor: false,
                        // forAuth: true,
                        forStudent: true,
                        // forAdmin: false
                    },
                },
                {
                    path: "/update-password",
                    name: "dashboard",
                    component: UpdatePasswordComponent,
                    mata: {
                        //forVisitor: false,
                        //forAuth: true,
                        forStudent: true,
                        //forAdmin: false
                    },
                },
                {
                    path: "/jamb",
                    name: "dashboard",
                    component: JambComponent,
                    mata: {
                        //forVisitor: false,
                        //forAuth: true,
                        forStudent: true,
                        //forAdmin: false
                    },
                },
                {
                    path: "/olevel/:id",
                    name: "dashboard.olevel",
                    component: OlevelComponent,
                    mata: {
                        //forVisitor: false,
                        //forAuth: true,
                        forStudent: true,
                        //forAdmin: false
                    },
                },            
                {
                    path: "/exam",
                    name: "dashboard",
                    component: ExamComponent,
                    mata: {
                        //forVisitor: false,
                        //forAuth: true,
                        forStudent: true,
                        //forAdmin: false
                    },
                },
                {
                    path: "/list-exam",
                    name: "dashboard",
                    component: ListExamComponent,
                    mata: {
                        //forVisitor: false,
                        //forAuth: true,
                        forStudent: true,
                        //forAdmin: false
                    },
                },
            ]
        }
    ]
});