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
		<v-tabs-items v-model="tab" class="bg-transparent">
			<v-tab-item class="">
				<h3 class="title my-4">What you need to know</h3>
				<v-expansion-panels>
					<v-expansion-panel v-for="item in expansions" :key="item.title">
						<v-expansion-panel-header class="expansion--title">{{ item.title }}</v-expansion-panel-header>
						<v-expansion-panel-content class="tabs--content">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat.
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
			</v-tab-item>
			<v-tab-item class="">
				<div class="reviews--header">
					<h3 class="title">21 alumni testimonials</h3>
					<div>
						<a href="#" class="submit--link"
							>Submit a review <span><i class="flaticon-plus"/></span
						></a>
					</div>
				</div>
				<ReviewCard />
			</v-tab-item>
		</v-tabs-items>
	</div>
</template>
<script>
import ReviewCard from './ReviewCard';
export default {
	name: 'Tabs',
	components: {
		ReviewCard,
	},
	data() {
		return {
			tab: null,
			items: ['Details', 'Reviews'],
			text:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			expansions: [
				{
					title: 'Locations',
					contents: '',
				},
				{
					title: 'Courses',
					contents: '',
				},
				{
					title: 'Program availability',
					contents: '',
				},
				{
					title: 'Age requirement',
					contents: '',
				},
				{
					title: 'Participation guidelines ',
					contents: '',
				},
				{
					title: 'Qualifications and experience',
					contents: '',
				},
				{
					title: 'Application details',
					contents: '',
				},
				{
					title: 'Additional information',
					contents: '',
				},
			],
		};
	},
};
</script>
<style scoped>
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
