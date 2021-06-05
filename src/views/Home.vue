<template>
	<div class="bg">
		<Navbar />
		<div class="container mt-md-4">
			<div class="row">
				<div class="col-md-4">
					<div class="card">
						<div class="card-body">
							<v-slider
								id="slider"
								v-model="fruits"
								:tick-labels="ticksLabels"
								:max="3"
								step="1"
								ticks="always"
								tick-size="5"
							></v-slider>

							<v-list-item two-line class="px-0">
								<v-list-item-content>
									<v-list-item-title class="home--sidebar--list"
										>Most in Demand Skills</v-list-item-title
									>
									<div class="py-4 px-0"><Skills /></div>
									<v-list-item-title class="home--sidebar--list"
										>Number of Programs</v-list-item-title
									>
									<v-list-item-subtitle class="home--sidebar--sublist" color="info"
										>11584</v-list-item-subtitle
									>
									<v-list-item-title class="home--sidebar--list"
										>Number of Graduates</v-list-item-title
									>
									<v-list-item-subtitle class="home--sidebar--sublist" color="info"
										>108874</v-list-item-subtitle
									>
									<v-list-item-title class="home--sidebar--list">Number of Awards</v-list-item-title>
									<v-list-item-subtitle class="home--sidebar--sublist" color="info"
										>3874</v-list-item-subtitle
									>
								</v-list-item-content>
							</v-list-item>
						</div>
					</div>
				</div>
				<div class="col-md-8">
					<div class="card h-100">
						<div class="card-body">
							<Map />
						</div>
					</div>
				</div>
			</div>
		</div>
		<ProfileDialog :visible="showProfileDialog" @close="showProfileDialog = false" />
		<Partners />
		<Footer />
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
import Navbar from '../components/Navbar';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import Map from '../components/Map';
import Skills from '../components/Skills';
import ProfileDialog from '../components/dialogs/ProfileDialog';

export default {
	name: 'Home',
	components: {
		Navbar,
		Partners,
		Footer,
		Map,
		Skills,
		ProfileDialog,
	},
	data() {
		return {
			showProfileDialog: false,
			value: 0,
			fruits: 0,
			ticksLabels: ['2017', '2018', '2019', '2020', '2021'],
			items: [
				{
					src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
				},
				{
					src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
				},
				{
					src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
				},
				{
					src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
				},
			],
		};
	},
	mounted() {
		if (this.isInstitution) {
			this.showProfileDialog = true;
		}
	},
	computed: {
		...mapGetters(['isInstitution']),
	},
};
</script>
<style scoped>
.home--sidebar--list {
	font-size: 1.2rem;
	border-bottom: 1px solid #ebebeb;
	font-weight: bold;
	padding-bottom: 1rem;
	text-transform: capitalize;
}
.home--sidebar--sublist {
	font-size: 1rem;
	color: #575f6e;
	font-weight: bold;
	padding: 1.5rem 0;
}
.v-slider__tick {
	background-color: transparent !important;
}
</style>
