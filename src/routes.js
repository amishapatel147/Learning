import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import User from './components/user.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/user/:id', component: User },
];

export default routes;