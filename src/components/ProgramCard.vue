<template>
	<div class="card program--card">
		<div class="card-body">
			<div class="row">
				<div class="col-md-2 d-flex justify-content-center align-items-center">
					<div class="">
						<v-img :src="DigitalSkillsLogo" class="programs--logo"></v-img>
					</div>
				</div>
				<div class="col-md-10">
					<span class="float-md-right "><i class="pr-2 flaticon-vector1" />{{ program.availabilty }}</span>

					<h4 class="card--title mb-0">{{ program.program_name }}</h4>
					<h5 class="card--subtitle pb-0 mb-0">{{ program.type }}</h5>
					<p class="subtitle-1">
						<span><i class="flaticon-placeholder"/></span> {{ program.location }}
					</p>
					<p>
						{{ program.partcipation_guidelines }}
					</p>
				</div>
			</div>
		</div>

		<div class="card-footer program--card--footer">
			<div class="row">
				<div class="col-md-2">
					<p class="program--reviews">
						<a href="#"><i class="flaticon-vector2" />21 Reviews</a>
					</p>
				</div>
				<div class="col-md-10">
					<div class="">
						<v-rating
							class="pl-md-3 float-left"
							v-model="rating"
							background-color="orange lighten-3"
							color="orange"
							small
						></v-rating>

						<Btn class="float-right">Visit website</Btn>
						<OutlineButton :to="`/programs/${program.id}`" class="float-right mr-md-3"
							>View Program</OutlineButton
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Btn from './Button';
import OutlineButton from './OutlineButton';
import DigitalSkillsLogo from '../assets/images/DigitalSkills-Logo.png';

export default {
	name: 'ProgramCard',
	props: ['program'],
	components: {
		Btn,
		OutlineButton,
	},

	data: () => ({
		rating: 4.5,
		DigitalSkillsLogo,
	}),
	methods: {},
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
	font-size: 10px;
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
a {
	text-decoration: none;
}
/* to be removed  */
.card--title {
	color: #00466e;
	font-size: 16px;
	font-weight: 700;
	line-height: 1.6;
}
.card--subtitle {
	color: #00b1bc !important;
	font-size: 13px;
	font-weight: 700;
}
.subtitle-1 {
	color: #575f6e;
	font-size: 12px !important;
	font-weight: 400;
}
</style>
