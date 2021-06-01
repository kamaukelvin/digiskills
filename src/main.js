import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import GoogleAuth from '@/config/google_oAuth.js';
import VeeValidate from 'vee-validate';
import Loading from './components/Loading';
import axios from 'axios';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.config.productionTip = false;

// google credentials
const gauthOption = {
	clientId: '171752500602-t3up07j6pj9joko0kqrm5sb9dgvlogfp.apps.googleusercontent.com',
	scope: 'profile email',
	prompt: 'select_account',
};

// AUTO AUTHENTICATION
const token = localStorage.getItem('user-token');
if (token) {
	axios.defaults.headers.common['Authorization'] = token;
}

Vue.use(GoogleAuth, gauthOption);
Vue.use(VeeValidate);
Vue.component('loading', Loading);
Vue.use(VueToast, {
	duration: 5000,
	dismissible: true,
	position: 'top-right',
});

new Vue({
	vuetify,
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
