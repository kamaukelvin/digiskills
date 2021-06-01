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
					<form class="register--form" @submit.prevent="login">
						<h1 class="">Sign In</h1>
						<p>Sign in with your social account</p>
						<div class="social--icons">
							<ul>
								<li>
									<a href="#"
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
									<a href="#"
										><div class="social--card"><i class="flaticon-facebook-circular-logo" /></div
									></a>
								</li>
							</ul>
						</div>
						<div class="mb-3">
							<label for="email" class="form-label">Email</label>
							<input
								type="email"
								class="form-control"
								id="email"
								name="email"
								v-validate="'required|email'"
								:class="{ 'is-invalid': submitted && errors.has('email') }"
								v-model="formData.email"
							/>
							<div v-if="submitted && errors.has('email')" class="invalid-feedback">
								{{ errors.first('email') }}
							</div>
						</div>
						<div class="mb-3">
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
							<div v-if="submitted && errors.has('password')" class="invalid-feedback">
								{{ errors.first('password') }}
							</div>
						</div>

						<button type="submit" class="btn btn-lg btn-primary btn-block register--button">
							Sign in
						</button>
						<p>Don't have an account? <router-link to="/">Sign Up</router-link></p>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Logo from '../assets/images/Logo.png';
import Amico from '../assets/images/amico.png';
import { AUTH_REQUEST } from '../store/actions/auth';

export default {
	name: 'SignIn',
	
	data() {
		return { Logo, Amico, submitted: false, formData: { email: '', password: '' } };
	},
	methods: {
		showError(message, type) {
			this.$toast.open({
				message: message,
				type: type,
			});
		},

		login() {
			this.submitted = true;
			this.$validator.validate().then(async (valid) => {
				if (valid) {
					this.$store
						.dispatch(AUTH_REQUEST, this.formData)
						.then(() => {
							this.$router.push('/home');
						})
						.catch(async (err) => {
							let error = await err;
							this.showError(error, 'error');
						});
				}
			});
		},
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
