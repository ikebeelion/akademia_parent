import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Auth/Login.vue'
import Timetable from './components/Timetable.vue'
import Myresult from './components/Result.vue'



const router = createRouter({
    history: createWebHistory(),    
    routes: [
        {path:'/', name:'login', component:Login},
        {path:'/wardresult', name:'myresult', component:Myresult},
        {path:'/viewtable', name:'viewtable', component:Timetable},        
        
    ]
})

export default router

