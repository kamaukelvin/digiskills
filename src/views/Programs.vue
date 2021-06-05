<template>
	<div v-if="$store.state.programs.loading">
		<PageLoader />
	</div>
	<div class="bg" v-else>
		<Navbar />
		<Banner />
		<div class="container">
			<Search />
			<div class="featured--header">
				<h6>Top featured programs <span class=""> | Eastern Africa</span></h6>
				<div>
					<CourseDialog :visible="showCourseDialog" @close="showCourseDialog = false" />
					<a href="#" class="program--link" @click="showCourseDialog = true"
						>Add a program <span><i class="flaticon-plus"/></span
					></a>
				</div>
			</div>
			<div v-if="isFeatured.length === 0">
				<p class="text-center">No Featured Programs</p>
			</div>
			<carousel v-else :items="3" :dots="false" :nav="false" class="carousel">
				<template slot="prev"
					><span class="prevCarousel" id="prev"> <i class="flaticon-previous"/></span
				></template>
				<FeaturedCard v-for="featured in isFeatured" :key="featured.id" :featured="featured" />
				<template slot="next"
					><span class="nextCarousel" id="next"> <i class="flaticon-next"/></span
				></template>
			</carousel>
			<section>
				<div class="all--programs--header">
					<h6>{{ `Browse ${getPrograms.length} programs that match your interest` }}</h6>
					<div>
						Sort by:
					</div>
				</div>
				<ProgramCard v-for="program in getPrograms" :key="program.id" :program="program" />
			</section>
			<div class="d-flex justify-content-center align-items-center my-4">
				<Btn>Show more</Btn>
			</div>
		</div>
		<Footer />
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
import carousel from 'vue-owl-carousel';

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Search from '../components/Search';
import FeaturedCard from '../components/FeaturedCard';
import ProgramCard from '../components/ProgramCard';
import Footer from '../components/Footer';
import Btn from '../components/Button';
import PageLoader from '../components/loaders/PageLoader';
import { PROGRAMS_REQUEST } from '../store/actions/programs';
import CourseDialog from '../components/dialogs/CourseDialog';
export default {
	name: 'Programs',
	components: {
		Search,
		FeaturedCard,
		ProgramCard,
		Navbar,
		Banner,
		Footer,
		carousel,
		Btn,
		PageLoader,
		CourseDialog,
	},
	data() {
		return { loading: false, showCourseDialog: false };
	},

	async mounted() {
		await this.$store.dispatch(PROGRAMS_REQUEST);
	},
	computed: {
		...mapGetters(['getPrograms', 'isFeatured']),
	},
};
</script>
<style scoped>
.featured--header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 25px;
}

.program--link {
	color: #575f6e;
	font-size: 16px;
	font-weight: 600;
}
.program--link:hover {
	color: #00b1bc;
	text-decoration: none;
}
.flaticon-plus {
	color: #00b1bc;
	font-size: 22px;
	padding-left: 7px;
}

.flaticon-placeholder {
	font-size: 10px;
	padding-right: 5px;
}
.all--programs--header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 0;
}
.all--programs--header h6,
.featured--header h6 {
	color: #000;
	font-weight: 700;
	font-size: 16px;
}
.featured--header h6 > span {
	color: #00b1bc;
	font-style: italic;
}
.carousel {
	padding: 0 4em;
	position: relative;
}
.prevCarousel {
	position: absolute;
	left: 13px;
	top: 40%;
	z-index: 99;
	font-size: 2.4em;
	color: #00b1bc;
	cursor: pointer;
}
.nextCarousel {
	position: absolute;
	right: 13px;
	top: 40%;
	z-index: 99;
	font-size: 2.4em;
	color: #00b1bc;
	cursor: pointer;
}
</style>
