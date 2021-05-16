<template>
	<div class="navbar__wrapper">
		<div class="navbar container">
			<div class="logo">
				<img :src="Logo" alt="" />
				<div class="title">
					DIGISKILLS AFRICA
					<h6>An initiative of AfDB and Partners</h6>
				</div>
			</div>
			<div>
				<ul class="nav__links">
					<li>Home</li>
					<li>Programs</li>
					<li>Blueprint</li>
					<li>Resources</li>
				</ul>
			</div>
			<div class="nav__icons">
				<span><i class="flaticon-magnifying-glass"/></span>
				<Button title="Sign In" />
			</div>
		</div>
	</div>
</template>
<script>
import Logo from '../assets/images/Logo.png';
import Button from './Button';
export default {
	name: 'Navbar',
	components: {
		Button,
	},
	data() {
		return {
			Logo,
		};
	},
};
</script>
<style scoped>
ul {
	margin-bottom: 0;
}
ul li {
	display: inline;
	list-style-type: none;
	text-transform: uppercase;
	font-size: 14px;
	padding: 0 1em;
}
.navbar__wrapper {
	height: 64px;
	background: #fff;
	border-bottom: 4px solid #00b1bc;
	position: sticky;
	top: 0;
	z-index: 1000;
}
.navbar {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
}
.logo,
.nav__icons {
	display: flex;
	align-items: center;
	justify-content: center;
}
.logo > img {
	margin-right: 20px;
}
.title {
	color: #00b1bc;
	font-size: 20px;
	text-transform: uppercase;
	font-weight: 700;
}
.title > h6 {
	color: #06685c;
	font-size: 12px;
}

.flaticon-magnifying-glass {
	color: #00b1bc;
	margin: 1.4em;
	font-size: 1.2em;
}
</style>
