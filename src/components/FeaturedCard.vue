<template>
	<v-card :loading="loading" class="my-12" max-width="320">
		<v-img height="200" :src="Kings" class="p-relative">
			<div class="logo--card"><v-img :src="KingsLogo" class="p-relative"></v-img></div>
		</v-img>

		<v-card-title class="card--title">Kings and Queens Program</v-card-title>
		<v-card-subtitle class="card--subtitle">Digital Marketing Program</v-card-subtitle>

		<v-card-text>
			<div class="subtitle-1">
				<span><i class="flaticon-placeholder"/></span>Nairobi, Kenya
			</div>
		</v-card-text>
		<v-card-actions>
			<Button title="Visit Website" class="mx-auto mb-3" />
		</v-card-actions>
	</v-card>
</template>
<script>
import Button from './Button';
import Kings from '../assets/images/Kings.png';
import KingsLogo from '../assets/images/Kings-Logo.png';

export default {
	name: 'FeaturedPrograms',
	components: {
		Button,
	},
	data: () => ({
		Kings,
		KingsLogo,
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
	padding-bottom: 5px;
}
.subtitle-1 {
	color: #575f6e;
	font-size: 12px;
	font-weight: 400;
}
</style>
