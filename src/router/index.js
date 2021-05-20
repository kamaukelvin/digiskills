import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Programs from '../views/Programs.vue';
import BluePrints from '../views/BluePrints.vue';
import Resources from '../views/Resources.vue';
import ResourcesArticle from '../views/ResourcesArticle.vue';
import ProgramDetails from '../views/ProgramDetails.vue';
import Register from '../views/Register.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/register',
		name: 'register',
		component: Register,
	},
	{
		path: '/',
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
		redirect: '/',
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
