<template>
	<v-app>
		<router-view />
	</v-app>
</template>

<script>
export default {
	name: 'App',
};
</script>

<style>
@import url(./assets/fonts/flaticon/flaticon.css);
@import url(./assets/fonts/icomoon/style.css);
.bg {
	background: #e5e5e5;
	min-height: 100vh;
}
.title {
	color: #000;
	font-weight: 700;
	font-size: 14px;
}
.card--title {
	color: #00466e;
	font-size: 16px;
	font-weight: 700;
	line-height: 1.6;
}
.card--subtitle {
	color: #00b1bc !important;
	font-size: 13px;
	font-weight: 700;
	padding-bottom: 5px;
}
.subtitle-1 {
	color: #575f6e;
	font-size: 12px im !important;
	font-weight: 400;
}
.form-control:focus {
	border-color: #00b1bc;
	box-shadow: none;
}
.v-application ol,
.v-application ul {
	padding-left: 0px !important;
}
</style>
