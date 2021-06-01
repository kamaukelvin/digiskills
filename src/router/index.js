import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Programs from '../views/Programs.vue';
import BluePrints from '../views/BluePrints.vue';
import Resources from '../views/Resources.vue';
import ResourcesArticle from '../views/ResourcesArticle.vue';
import ProgramDetails from '../views/ProgramDetails.vue';
import Register from '../views/Register.vue';
import SignIn from '../views/SignIn.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'register',
		component: Register,
	},
	{
		path: '/login',
		name: 'login',
		component: SignIn,
	},
	{
		path: '/home',
		name: 'home',
		component: Home,
	},
	{
		path: '/programs',
		name: 'program',
		component: Programs,
	},
	{
		path: '/programs/:id',
		name: 'programDetails',
		component: ProgramDetails,
	},
	{
		path: '/blueprints',
		name: 'blueprints',
		component: BluePrints,
	},
	{
		path: '/resources',
		name: 'resources',
		component: Resources,
	},
	{
		path: '/resources/:id',
		name: 'article',
		component: ResourcesArticle,
	},

	// redirect incase user types navigates to a wrong path route
	{
		path: '*',
		redirect: '/login',
	},
];

const router = new VueRouter({
	mode: 'history',
	linkExactActiveClass: 'active',
	base: process.env.BASE_URL,
	routes,
});
router.beforeEach((to, from, next) => {
	// redirect to login page if not logged in and trying to access a restricted page
	const publicPages = ['/login', '/'];
	const authRequired = !publicPages.includes(to.path);
	const loggedIn = localStorage.getItem('user');

	if (authRequired && !loggedIn) {
		return next('/login');
	}
	next();
});

export default router;
