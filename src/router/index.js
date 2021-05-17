import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Programs from '../views/Programs.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/programs',
		name: 'programs',
		component: Programs,
	},

	// redirect incase user types navigates to a wrong path route
	{
		path: '*',
		redirect: '/',
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
