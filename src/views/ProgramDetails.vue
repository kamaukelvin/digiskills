<template>
	<div v-if="isProgramsLoaded">
		<PageLoader />
	</div>
	<div class="bg" v-else>
		<Navbar />
		<div>{{ getSingleProgram }}</div>
		<div class="program--banner">
			<div class="profile">
				<img src="https://picsum.photos/id/11/500/300" class="profile--picture" />
			</div>
		</div>
		<div class="container">
			<TopCard :details="getSingleProgram" />
			<About :details="getSingleProgram" />
			<Tabs :details="getSingleProgram" :reviews="getReviews" />
			<section class="">
				<h3 class="title my-5">Awards and Recognition</h3>
				<carousel :items="3" :dots="false" class="">
					<AwardsCard v-for="(item, i) in 5" :key="i" />
				</carousel>
			</section>
			<section class="">
				<h3 class="title my-5">Related Programs</h3>
				<ProgramCard v-for="(item, i) in 5" :key="i" />
				<div class="d-flex justify-content-center align-items-center my-4">
					<Btn>Show More</Btn>
				</div>
			</section>
		</div>
		<Footer />
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import carousel from 'vue-owl-carousel';
import TopCard from '../components/TopCard';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Tabs from '../components/Tabs';
import AwardsCard from '../components/AwardsCard';
import ProgramCard from '../components/ProgramCard';
import Btn from '../components/Button';
import Footer from '../components/Footer';
import PageLoader from '../components/loaders/PageLoader';
import { SINGLE_PROGRAM_REQUEST } from '../store/actions/programs';
import { REVIEWS_REQUEST } from '../store/actions/reviews';

export default {
	name: 'ProgramDetails',
	components: {
		TopCard,
		Navbar,
		About,
		Tabs,
		AwardsCard,
		carousel,
		ProgramCard,
		Btn,
		Footer,
		PageLoader,
	},
	async mounted() {
		await this.$store.dispatch(SINGLE_PROGRAM_REQUEST, this.$route.params.id);
		await this.$store.dispatch(REVIEWS_REQUEST, this.$route.params.id);
	},
	computed: {
		...mapGetters(['isProgramsLoaded', 'getSingleProgram', 'getReviews']),
	},
};
</script>
<style scoped>
.program--banner {
	background: url('../assets/images/profile-banner.png');
	min-height: 200px;
	background-position: center;
	position: relative;
}
.profile {
	position: absolute;
	height: 130px;
	width: 130px;
	background: #fff;
	border-radius: 50%;
	left: 180px;
	bottom: -75px;
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
}
.profile--picture {
	border-radius: 50%;
	height: 90px;
	width: 90px;
}
</style>
