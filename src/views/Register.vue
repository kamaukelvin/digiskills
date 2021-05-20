<template>
	<div class="bg">
		<div class="container">
			<div class="row">
				<div class="col-md-6 d-none d-md-block">
					<div class="logo">
						<v-img :lazy-src="Logo" max-height="50" max-width="50" :src="Logo"></v-img>
						<div>
							<h1 class="logo--title">DIGISKILLS AFRICA</h1>
							<h3 class="logo--subtitle">AN INITIATIVE OF AFDB AND PARTNERS</h3>
						</div>
					</div>
				</div>
				<div class="col-md-6"></div>
			</div>
		</div>
	</div>
</template>
<script>
import Logo from '../assets/images/Logo.png';
export default {
	name: 'Register',
	data() {
		return { Logo };
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
</style>
