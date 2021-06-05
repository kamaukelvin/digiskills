<template>
	<div>
		<v-card flat class="tabs--card">
			<v-toolbar flat class="tabs--wrapper">
				<v-tabs v-model="tab" align-with-title class="ml-0">
					<v-tabs-slider color="#00B1BC"></v-tabs-slider>

					<v-tab v-for="item in items" :key="item" class="tabs--title" dark>
						{{ item }}
					</v-tab>
				</v-tabs>
			</v-toolbar>
		</v-card>
		<Review :visible="showReviewDialog" @close="showReviewDialog = false" />
		<v-tabs-items v-model="tab" class="bg-transparent">
			<v-tab-item class="">
				<h3 class="title my-4">What you need to know</h3>
				<v-expansion-panels>
					<v-expansion-panel v-for="item in expansions" :key="item.title">
						<v-expansion-panel-header class="expansion--title"
							><span><i :class="item.icon" class="mr-2"/></span>{{ item.title }}</v-expansion-panel-header
						>
						<v-expansion-panel-content class="tabs--content">
							{{ item.contents }}
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
			</v-tab-item>
			<v-tab-item class="">
				<div class="reviews--header">
					<h3 class="title">{{ this.reviews.length }} alumni testimonials</h3>

					<div>
						<a class="submit--link" @click="showReviewDialog = true"
							>Submit a review <span><i class="flaticon-plus"/></span
						></a>
					</div>
				</div>
				<ReviewCard :reviews="reviews" />
			</v-tab-item>
		</v-tabs-items>
	</div>
</template>
<script>
import ReviewCard from './ReviewCard';
import Review from '../components/dialogs/Review';
export default {
	name: 'Tabs',
	components: {
		ReviewCard,
		Review,
	},
	props: ['reviews', 'details'],
	data() {
		console.log('PROGRAM DETAILS HAPA', this.details);
		return {
			showReviewDialog: false,

			tab: null,
			items: ['Details', 'Reviews'],
			text:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			expansions: [
				{
					title: 'Location',
					icon: 'icon-location',
					contents: `${this.details.program.location}`,
				},
				{
					title: 'Courses',
					icon: 'icon-course',
					contents: `${this.details.courses}`,
				},
				{
					title: 'Program availability',
					icon: 'icon-program',
					contents: `${this.details.program.availabilty}`,
				},
				{
					title: 'Age requirement',
					icon: 'icon-age',
					contents: `${this.details.program.age_requirements}`,
				},
				{
					title: 'Participation guidelines ',
					icon: 'icon-guidelines',
					contents: `${this.details.program.partcipation_guidelines}`,
				},
				{
					title: 'Qualifications and experience',
					icon: 'icon-qualifications',
					contents: `${this.details.program.exprience}`,
				},
				{
					title: 'Application details',
					icon: 'icon-details',
					contents: `${this.details.program.application_details}`,
				},
				{
					title: 'Additional information',
					icon: 'icon-information',
					contents: `${this.details.program.additional_requirements}`,
				},
			],
		};
	},
};
</script>
<style scoped>
.v-expansion-panel-header > :not(.v-expansion-panel-header__icon) {
	flex: 0;
}
.tabs--card {
	border-radius: 10px;
}
.tabs--title {
	text-transform: capitalize;
	font-weight: 700;
	color: #000 !important;
	padding: 0 2em;
}
.tabs--wrapper {
	height: 80px !important;
}
.expansion--title {
	color: #00466e;
	font-size: 14px;
	font-weight: 700;
}
.v-expansion-panel-header {
	padding: 20px 24px !important;
}
.tabs--content {
	padding-top: 16px;
	background: #ebebeb;
}
.reviews--header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 1.5rem 0;
}

.submit--link {
	color: #575f6e;
	font-size: 14px;
	font-weight: 600;
}
.submit--link:hover {
	color: #00b1bc;
	text-decoration: none;
}
.flaticon-plus {
	color: #00b1bc;
	font-size: 22px;
	padding-left: 7px;
}
</style>
