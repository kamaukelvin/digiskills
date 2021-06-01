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

Vue.config.productionTip = false;
const gauthOption = {
	clientId: '171752500602-t3up07j6pj9joko0kqrm5sb9dgvlogfp.apps.googleusercontent.com',
	scope: 'profile email',
	prompt: 'select_account',
};

Vue.use(GoogleAuth, gauthOption);
Vue.use(VeeValidate);

new Vue({
	vuetify,
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
// 171752500602-t3up07j6pj9joko0kqrm5sb9dgvlogfp.apps.googleusercontent.com
// oMpngtxwCzmlxbp5yw9JyWWd;
