<template>
	<router-link to="/programs/1">
		<div class="card program--card">
			<div class="card-body">
				<div class="row">
					<div class="col-md-2 d-flex justify-content-center align-items-center">
						<div class="">
							<v-img :src="DigitalSkillsLogo" class="programs--logo"></v-img>
						</div>
					</div>
					<div class="col-md-10">
						<span class="float-md-right "><i class="pr-2 flaticon-vector1" />Available Online</span>
						<h4 class="card--title">Digital Skills Program</h4>
						<h5 class="card--subtitle">UI/UX Vocational Training</h5>
						<p class="subtitle-1">
							<span><i class="flaticon-placeholder"/></span> Stellenbosch, Western Cape, South Africa
						</p>
						<p>
							3 years Data Science and Machine learning Course Program - Ed Dumani Scholarships May Cohort
							(Online classes). This scholarship is tailored to allow more African students to experience
							firsthand the challenges and growth of studying in a non-traditional region that is often
							unfamiliar to and misunderstood by those in the different regions of Africa.
						</p>
					</div>
				</div>
			</div>

			<div class="card-footer program--card--footer">
				<div class="row">
					<div class="col-md-2">
						<p class="program--reviews"><i class="flaticon-vector2" />21 Reviews</p>
					</div>
					<div class="col-md-10">
						<div class="d-flex justify-content-between align-items-center">
							<v-rating
								class="pl-md-3"
								v-model="rating"
								background-color="orange lighten-3"
								color="orange"
								small
							></v-rating>
							<div>
								<Button title="Visit website" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</router-link>
</template>
<script>
import Button from './Button';
import DigitalSkillsLogo from '../assets/images/DigitalSkills-Logo.png';

export default {
	name: 'ProgramCard',
	components: {
		Button,
	},
	data: () => ({
		rating: 4.5,
		DigitalSkillsLogo,
	}),
};
</script>
<style scoped>
.program--card {
	border-radius: 10px;
	margin-bottom: 3rem;
}
.program--card span {
	font-weight: 400;
	font-size: 13px;
	color: #000;
}
.program--card--footer {
	border-top: 1px solid #dfe4ed;
	background: #fff;
}

.flaticon-placeholder {
	font-size: 16px;
}
.flaticon-vector1,
.flaticon-vector2 {
	color: #00b1bc;
	padding-right: 7px;
}
.program--reviews {
	color: #575f6e;
	font-size: 15px;
	font-weight: 700;
	text-align: center;
}
.programs--logo {
	max-height: 100px;
	max-width: 100px;
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
