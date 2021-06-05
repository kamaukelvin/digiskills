import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import auth from './modules/auth';
import programs from './modules/programs';
import reviews from './modules/reviews';
import resources from './modules/resources';
import profile from './modules/profile';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		user,
		auth,
		programs,
		reviews,
		resources,
		profile,
	},
});
