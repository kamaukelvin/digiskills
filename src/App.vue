<template>
	<div>
		<!-- <Demand /> -->
		<Programs />
	</div>
</template>

<script>
// import Demand from './views/DemandSkills';
import Programs from './views/Programs';

export default {
	name: 'App',
	components: {
		// Demand,
		Programs,
	},
};
</script>

<style>
@import url(./assets/fonts/flaticon/flaticon.css);
.bg {
	background: #e5e5e5;
	min-height: 100vh;
}
.card--title {
	color: #00466e;
	font-size: 16px;
	font-weight: 700;
	line-height: 1;
}
.card--subtitle {
	color: #00b1bc !important;
	font-size: 13px;
	font-weight: 700;
	padding-bottom: 5px;
}
.subtitle-1 {
	color: #575f6e;
	font-size: 12px;
	font-weight: 400;
}
</style>
