<template>
	<div class="bg">
		<div class="container">
			<div class="row mt-md-5">
				<div class="col-md-6 d-none d-md-block">
					<div class="logo">
						<v-img :lazy-src="Logo" max-height="50" max-width="50" :src="Logo"></v-img>
						<div>
							<h1 class="logo--title">DIGISKILLS AFRICA</h1>
							<h3 class="logo--subtitle">AN INITIATIVE OF AFDB AND PARTNERS</h3>
						</div>
					</div>
					<div class="content">
						<p class="register--description">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem
							Ipsum is simply dummy text.
						</p>
					</div>
					<v-img :lazy-src="Amico" max-width="350" :src="Amico"></v-img>
				</div>
				<div class="col-md-6">
					<OtpDialog :visible="showOtp" @close="showOtp = false" />
					<form @submit.prevent="register" class="register--form">
						<h1 class="">Register</h1>
						<p>Sign up with your social account</p>
						<div class="social--icons">
							<ul>
								<li>
									<a @click.prevent="loginWithGoogle"
										><div class="social--card"><i class="" /></div
									></a>
								</li>
								<li>
									<a href="#"
										><div class="social--card"><i class="flaticon-twitter" /></div
									></a>
								</li>
								<li>
									<a href="#"
										><div class="social--card"><i class="flaticon-linkedin" /></div
									></a>
								</li>
								<li>
									<a href="#" @click.prevent="loginWithFacebook"
										><div class="social--card"><i class="flaticon-facebook-circular-logo" /></div
									></a>
								</li>
							</ul>
						</div>
						<div class="form-group">
							<label for="" class="form-label">I would like to</label>
							<select
								class="form-select form-control"
								name="user_type"
								v-validate="'required'"
								:class="{ 'is-invalid': submitted && errors.has('user_type') }"
								v-model="formData.user_type"
							>
								<option value="institution">Register a Program</option>
								<option value="reviewer">Review a program</option>
							</select>
							<div v-if="submitted && errors.has('user_type')" class="invalid-feedback">
								{{ errors.first('user_type') }}
							</div>
						</div>
						<div class="form-group">
							<label for="email" class="form-label">Email</label>
							<input
								type="email"
								name="email"
								class="form-control"
								v-validate="'required|email'"
								:class="{ 'is-invalid': submitted && errors.has('email') }"
								v-model="formData.email"
								id="email"
							/>
							<div v-if="submitted && errors.has('email')" class="invalid-feedback">
								{{ errors.first('email') }}
							</div>
						</div>
						<div class="form-group">
							<label for="full_name" class="form-label">Full Name</label>
							<input
								type="text"
								name="full_name"
								class="form-control"
								v-validate="'required'"
								:class="{ 'is-invalid': submitted && errors.has('full_name') }"
								v-model="formData.full_name"
								id="full_name"
							/>
							<div v-if="submitted && errors.has('name')" class="invalid-feedback">
								{{ errors.first('full_name') }}
							</div>
						</div>
						<div class="form-group">
							<label for="phone" class="form-label">Phone Number</label>
							<input
								type="text"
								class="form-control"
								name="phone"
								v-validate="'required'"
								:class="{ 'is-invalid': submitted && errors.has('phone') }"
								v-model="formData.phone"
							/>
							<div v-if="submitted && errors.has('phone')" class="invalid-feedback">
								{{ errors.first('phone') }}
							</div>
						</div>
						<div class="form-group">
							<label for="password" class="form-label">Enter Password</label>
							<input
								type="password"
								class="form-control"
								id="password"
								name="password"
								v-validate="'required'"
								:class="{ 'is-invalid': submitted && errors.has('password') }"
								v-model="formData.password"
							/>
							<password v-model="formData.password" :strength-meter-only="true" />
							<div v-if="submitted && errors.has('password')" class="invalid-feedback">
								{{ errors.first('password') }}
							</div>
						</div>
						<div class="form-group form-check">
							<input
								type="checkbox"
								class="form-check-input"
								id="terms"
								name="terms"
								:class="{ 'is-invalid': submitted && errors.has('terms') }"
								v-model="formData.terms"
								v-validate="'required:true'"
							/>
							<label class="form-check-label" for="terms"
								>I agree to <a href="#">terms & conditions</a></label
							>
							<div v-if="submitted && errors.has('terms')" class="invalid-feedback">
								{{ errors.first('terms') }}
							</div>
						</div>

						<button
							type="submit"
							class="btn btn-lg btn-primary btn-block register--button"
							:disabled="isLoading"
						>
							<span v-if="isLoading"
								>Please wait...<v-progress-circular
									indeterminate
									:size="17"
									:width="2"
									class="ml-2"
									color="white"
								></v-progress-circular
							></span>
							<span v-else> Sign Up</span>
						</button>
					</form>
					<p>Do you already have an account? <router-link to="/login">Sign In</router-link></p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
import Logo from '../assets/images/Logo.png';
import Amico from '../assets/images/amico.png';
import Password from 'vue-password-strength-meter';
import { REG_REQUEST } from '../store/actions/auth';
import OtpDialog from '../components/OtpDialog';
// import { initFbsdk } from '@/config/facebook_oAuth.js';
export default {
	name: 'Register',
	components: { Password, OtpDialog },

	// mounted() {
	// 	initFbsdk();
	// },
	data() {
		return {
			Logo,
			Amico,
			submitted: false,
			showOtp: false,
			formData: { email: '', password: '', full_name: '', phone: '', user_type: '', terms: '' },
		};
	},
	methods: {
		open(message, type) {
			this.$toast.open({
				message: message,
				type: type,
			});
		},
		register() {
			this.submitted = true;
			this.$validator.validate().then(async (valid) => {
				if (valid) {
					this.$store
						.dispatch(REG_REQUEST, this.formData)
						.then(() => {
							this.showOtp = true;
						})
						.catch(async (err) => {
							let error = await err;
							this.open(error, 'error');
						});
				}
			});
		},
		loginWithGoogle() {
			this.$gAuth
				.signIn()
				.then((GoogleUser) => {
					// on success do something
					console.log('GoogleUser', GoogleUser);
					var userInfo = {
						loginType: 'google',
						google: GoogleUser,
					};
					this.$store.commit('setLoginUser', userInfo);
					this.$router.push('/home');
				})
				.catch((error) => {
					console.log('error', error);
				});
		},
		loginWithFacebook() {
			window.FB.login((response) => {
				var userInfo = {
					loginType: 'fb',
					fb: response,
				};
				console.log('fb response', response);
				this.$store.commit('setLoginUser', userInfo);
				this.$router.push('/home');
			}, this.params);
		},
	},
	computed: {
		...mapGetters(['isLoading']),
	},
};
</script>
<style scoped>
.logo {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.logo div {
	margin-left: 1em;
}
.logo--title {
	font-size: 28px;
	color: #00b1bc;
	text-transform: uppercase;
	font-weight: 700;
	margin: 0;
}
.logo--subtitle {
	font-size: 18px;
	color: #06685c;
	text-transform: uppercase;
	margin: 0;
}
.content {
	padding: 1em;
	border: 1px solid #00b1bc;
	border-radius: 10px;
	margin-top: 2em;
}

/* register form */
.register--form {
	margin: 0 3em;
}
.register--form h1 {
	color: #000;
	font-size: 30px;
	text-align: center;
	font-weight: 700;
}
.register--form p {
	text-align: center;
	font-size: 16px;
	color: #777777;
}

.form-control {
	background-color: transparent;
	border: 1px solid #00b1bc;
	border-radius: 4px;
}
.form-control:focus {
	box-shadow: none !important;
}
.form-label {
	color: #696f79;
	font-size: 14px;
}

/* social icons */
ul {
	margin: 2em 0;
	display: flex;
	justify-content: center;
	align-items: center;
}
ul li {
	list-style: none;
	display: inline;
	margin: 0 0.4em;
}
.social--card {
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1em;
	height: 50px;
	width: 50px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
	border-radius: 6px;
}
.social--card i {
	font-size: 24px;
	line-height: 1.6 !important;
}
.flaticon-twitter {
	color: #55acee;
}
.flaticon-linkedin {
	color: #0e76a8;
}
.flaticon-facebook-circular-logo {
	color: #3b5998;
}
ul li a:hover {
	text-decoration: none;
}
/* button */
.register--button {
	background: #00b1bc;
	color: #fff;
	font-size: 14px;
	border: none !important;
	margin: 1.4em 0;
}
.register--button:hover {
	border-color: #00b1bc;
}
.register--button:not(:disabled):not(.disabled):active {
	background-color: #00b1bc;
	border-color: #00b1bc;
}
.register--button:focus {
	border-color: #00b1bc;
	box-shadow: none;
}
</style>
