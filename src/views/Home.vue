<template>
	<div v-if="this.loading">
		<PageLoader />
	</div>
	<div class="bg" v-else>
		<Navbar />
		<div class="container mt-md-4">
			<div class="row">
				<div class="col-md-4">
					<div class="card">
						<div class="card-body">
							<v-slider
								id="slider"
								v-model="value"
								:tick-labels="ticksLabels"
								:max="3"
								step="1"
								ticks="always"
								tick-size="5"
								@change="sort('graduants')"
							></v-slider>

							<div class="" v-for="item in ticksLabels" v-bind:key="item">
								{{ item }}
							</div>

							<v-list-item two-line class="px-0">
								<v-list-item-content>
									<v-list-item-title class="home--sidebar--list"
										>Most in Demand Skills</v-list-item-title
									>
									<div class="py-4 px-0"><Skills :sorted="this.sorted" /></div>
									<v-list-item-title class="home--sidebar--list"
										>Number of Programs</v-list-item-title
									>
									<v-list-item-subtitle class="home--sidebar--sublist" color="info">{{
										this.sorted.length
									}}</v-list-item-subtitle>
									<v-list-item-title class="home--sidebar--list"
										>Number of Graduates</v-list-item-title
									>
									<v-list-item-subtitle class="home--sidebar--sublist" color="info">{{
										this.totalGraduates
									}}</v-list-item-subtitle>
									<v-list-item-title class="home--sidebar--list">Number of Awards</v-list-item-title>
									<v-list-item-subtitle class="home--sidebar--sublist" color="info">{{
										this.totalAwards
									}}</v-list-item-subtitle>
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
import { getDashboardSummary } from '../services/apiSrv';
import PageLoader from '../components/loaders/PageLoader';

export default {
	name: 'Home',
	components: {
		Navbar,
		Partners,
		Footer,
		Map,
		Skills,
		ProfileDialog,
		PageLoader,
	},
	data() {
		return {
			showProfileDialog: false,
			summary: {},
			value: 0,
			sorted: [],
			totalGraduates: 0,
			totalAwards: 0,
			loading: false,
			programs: [],
			ticksLabels: ['2018', '2019', '2020', '2021'],
		};
	},
	methods: {
		async getSummary() {
			this.loading = true;
			try {
				let resp = await getDashboardSummary();
				console.log('summary', resp);
				this.summary = resp;
				this.loading = false;
			} catch (err) {
				console.log(err);
				this.loading = false;
			}
		},
		dynamicSort(property) {
			let sortOrder = 1;
			if (property[0] === '-') {
				sortOrder = -1;
				property = property.substr(1);
			}
			return function(a, b) {
				let result = b[property] < a[property] ? -1 : b[property] > a[property] ? 1 : 0;

				return result * sortOrder;
			};
		},
		sort(value) {
			let sorted = this.programs.sort(this.dynamicSort(value));
			this.sorted = sorted;
			this.sumGraduates();
			this.sumAwards();
			this.shuffle();
		},
		sumGraduates() {
			let total = this.sorted.reduce(function(sum, current) {
				return sum + Number(current['graduants']);
			}, 0);
			this.totalGraduates = total;
		},
		sumAwards() {
			let total = this.sorted.reduce(function(sum, current) {
				return sum + Number(current['awards']);
			}, 0);
			this.totalAwards = total;
		},
	},
	created() {
		if (this.isInstitution && this.isProfileNotFilled) {
			this.showProfileDialog = true;
		}
		this.getSummary();
	},

	beforeUpdate() {
		console.log('CHECK DATA', this.summary[0]);
		this.programs = this.summary['2021'];
		this.sort('graduants');
	},
	computed: {
		...mapGetters(['isInstitution', 'getUser', 'isProfileNotFilled']),
	},
	watch: {
		value(range) {
			console.log('what is range?', range);
			if (range <= 0) {
				this.programs = this.summary['2021'];
			}
			if (range > 0 && range <= 1) {
				this.programs = this.summary['2019'];
			}
			if (range > 1 && range <= 2) {
				this.programs = this.summary['2020'];
			}
			if (range > 2 && range <= 3) {
				this.programs = this.summary['2021'];
			}
		},
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
