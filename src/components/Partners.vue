<template>
	<div class="partners__bg">
		<h5 class="text-center text-white py-3">Partners</h5>
		<div class="partners container">
			<v-img
				v-for="partner in partners"
				:key="partner"
				contain
				max-height="85"
				max-width="85"
				:src="partner"
			></v-img>
		</div>
	</div>
</template>
<script>
import Partner0 from '../assets/images/Partner 0.png';
import Partner1 from '../assets/images/Partner 1.png';
import Partner2 from '../assets/images/Partner 2.png';
import Partner3 from '../assets/images/Partner 3.png';
import Partner4 from '../assets/images/Partner 4.png';
export default {
	name: 'Partners',
	data() {
		return {
			partners: [Partner0, Partner1, Partner2, Partner3, Partner4],
		};
	},
};
</script>
<style scoped>
.partners__bg {
	background: #00b1bc;
	min-height: 230px;
}
.partners {
	display: flex;
	justify-content: space-around;
	align-items: center;
}
</style>
