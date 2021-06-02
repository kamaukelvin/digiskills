<template>
	<v-overlay>
		<div class="overlay">
			<div class="logo"><img :src="Logo" alt="" /></div>
			<v-progress-linear indeterminate color="teal" height="5"></v-progress-linear>
		</div>
	</v-overlay>
</template>
<script>
import Logo from '../../assets/images/Logo.png';
export default {
	name: 'PageLoader',
	data() {
		return { Logo };
	},
};
</script>
<style scoped>
.overlay {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.logo > img {
	max-width: 75px;
	max-height: 75px;
	margin-bottom: 20px;
	animation: pulse 2s linear infinite;
}

@keyframes pulse {
	0% {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}
	50% {
		-webkit-transform: scale(0.8);
		transform: scale(0.8);
	}
	100% {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}
}
</style>
