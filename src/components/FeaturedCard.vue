<template>
	<v-card class="my-12 shadow-none" max-width="330">
		<v-img height="200" :src="Kings" class="position-relative">
			<div class="logo--card"><v-img :src="KingsLogo" class="position-relative"></v-img></div>
		</v-img>

		<v-card-title class="card--title">{{ featured.name }}</v-card-title>
		<v-card-subtitle class="card--subtitle">{{ featured.type }}</v-card-subtitle>

		<v-card-text>
			<div class="subtitle-1">
				<span><i class="flaticon-placeholder"/></span>{{ featured.location }}
			</div>
		</v-card-text>
		<v-card-actions> <Btn class="mx-auto mb-3" href="www.google.com">Visit Website</Btn></v-card-actions>
	</v-card>
</template>
<script>
import Btn from './Button';
import Kings from '../assets/images/Kings.png';
import KingsLogo from '../assets/images/Kings-Logo.png';

export default {
	name: 'FeaturedPrograms',
	props: ['featured'],
	components: {
		Btn,
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
	left: 20px;
	top: 20px;
	max-width: 60px;
	max-height: 70px;
	background: #fff;
	padding: 10px;
	border-radius: 8px;
}
/* to be removed  */
.card--title {
	color: #00466e;
	font-size: 17px;
	font-weight: 700;
	line-height: 1;
}
.card--subtitle {
	color: #00b1bc !important;
	font-size: 14px;
	font-weight: 700;
	padding-bottom: 5px;
}
.subtitle-1 {
	color: #575f6e;
	font-size: 13px !important;
	font-weight: 400;
}
.flaticon-placeholder {
	font-size: 10px;
}
</style>
