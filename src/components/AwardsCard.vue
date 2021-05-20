<template>
	<v-card :loading="loading" class="" max-width="320">
		<v-img height="200" :src="Awards" class="position-relative"> </v-img>

		<v-card-title class="card--title">Top Digital Skills Program</v-card-title>
		<v-card-subtitle class="card--subtitle">Africa, 2019</v-card-subtitle>
	</v-card>
</template>
<script>
import Awards from '../assets/images/Awards.png';

export default {
	name: 'FeaturedPrograms',
	components: {},
	data: () => ({
		Awards,
	}),
};
</script>
<style scoped>
.logo--card {
	position: absolute;
	left: 30px;
	top: 30px;
	max-width: 60px;
	max-height: 70px;
	background: #fff;
	padding: 10px;
	border-radius: 8px;
}
/* to be removed  */
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
	padding-bottom: 15px;
}
</style>
