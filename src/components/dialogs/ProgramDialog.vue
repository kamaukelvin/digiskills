<template>
	<v-row justify="center">
		<v-dialog v-model="show" persistent max-width="650">
			<v-card>
				<v-card-title class="">
					Add Program<v-btn class="ml-auto" icon @click="show = false">
						<v-icon>mdi-close</v-icon>
					</v-btn>
				</v-card-title>
				<v-card-text>
					<v-form v-model="valid" @submit.prevent="validate" ref="form">
						<v-row>
							<v-col cols="12" md="12">
								<v-text-field
									v-model="form.name"
									:rules="[(v) => !!v || 'Program Name is required']"
									label="Program Name"
									required
								></v-text-field>
							</v-col>
							<v-col cols="12" md="6">
								<v-select
									v-model="form.type"
									:items="title"
									:rules="[(v) => !!v || 'Program type is required']"
									label="Program Type"
									required
								></v-select>
							</v-col>
							<v-col cols="12" md="6">
								<v-select
									v-model="form.availabilty"
									:items="availability"
									:rules="[(v) => !!v || 'Program availability is required']"
									label="Availability"
									required
								></v-select>
							</v-col>
							<v-col cols="12" md="6">
								<v-text-field
									v-model="form.location"
									:rules="[(v) => !!v || 'Location is required']"
									label="Location"
									required
								></v-text-field>
							</v-col>
							<v-col cols="12" md="6">
								<v-select
									v-model="form.age_requirements"
									:items="age"
									:rules="[(v) => !!v || 'Age is required']"
									label="Age Requirements"
									required
								></v-select>
							</v-col>
							<v-col cols="12" md="12">
								<v-file-input
									v-model="form.image"
									accept="image/*"
									label="Upload Logo"
									prepend-icon="mdi-camera"
									:rules="[(v) => !!v || 'Program Image is required']"
									class="mb-2"
									required
								></v-file-input>
							</v-col>
							<v-col cols="12" md="12">
								<v-textarea
									v-model="form.exprience"
									:rules="[(v) => !!v || 'Experience is required']"
									label="Experience"
									required
									rows="2"
								></v-textarea>
							</v-col>

							<v-col cols="12" md="12">
								<v-textarea
									:rules="[(v) => !!v || 'Quaifications is required']"
									label="Qualifications"
									class="mb-2"
									required
									rows="2"
									v-model="form.qualification"
								></v-textarea>
							</v-col>
							<v-col cols="12" md="12">
								<v-textarea
									:rules="[(v) => !!v || 'Brief description is required']"
									label="About the program"
									class="mb-2"
									required
									rows="2"
									v-model="form.about"
								></v-textarea>
							</v-col>
							<v-col cols="12" md="12">
								<v-textarea
									:rules="[(v) => !!v || 'Application details is required']"
									label="Application Details"
									class="mb-2"
									required
									rows="2"
									v-model="form.application_details"
								></v-textarea>
							</v-col>
							<v-col cols="12" md="12">
								<v-textarea
									:rules="[(v) => !!v || 'Additional requirements are required']"
									label="Additional requirements"
									class="mb-2"
									rows="2"
									v-model="form.additional_requirements"
								></v-textarea>
							</v-col>
							<v-col cols="12" md="12">
								<v-textarea
									:rules="[(v) => !!v || 'Participation guidelines are required']"
									label="Participation guidelines"
									class="mb-2"
									rows="2"
									v-model="form.partcipation_guidelines"
								></v-textarea>
							</v-col>
						</v-row>
						<v-btn type="submit" class="mb-3" :disabled="isProgramsLoaded" color="primary">
							<span v-if="isProgramsLoaded"
								>Please wait...<v-progress-circular
									indeterminate
									:size="17"
									:width="2"
									class="ml-2"
									color="white"
								></v-progress-circular
							></span>
							<span v-else> Add Program</span>
						</v-btn>
					</v-form>
				</v-card-text>
			</v-card>
		</v-dialog>
	</v-row>
</template>
<script>
import { mapGetters } from 'vuex';
import { ADD_PROGRAM_REQUEST, ADD_PROGRAM_ERROR } from '../../store/actions/programs';

export default {
	name: 'CourseDialog',
	props: ['visible'],
	data() {
		return {
			valid: true,
			step: 1,
			program: ['Data Science'],
			title: ['Data Science'],
			cost: ['Contact program for cost breakdown'],
			availability: ['Part Time', 'Full Time', 'Online'],
			duration: ['1 - 2 weeks', '2 - 4 weeks'],
			age: ['Below 18 years', '18 -35 years', '35-75 years', 'Over 75 years'],

			form: {
				name: '',
				organization_id: '',
				type: '',
				availabilty: '',
				location: '',
				image: null,
				age_requirements: '',
				partcipation_guidelines: '',
				qualification: '',
				exprience: '',
				about: '',
				application_details: '',
				additional_requirements: '',
			},
		};
	},
	mounted() {
		this.form.organization_id = this.getUser.id;
	},
	methods: {
		showError(message, type) {
			this.$toast.open({
				message: message,
				type: type,
			});
		},

		async validate() {
			this.$refs.form.validate();
			if (this.valid)
				try {
					await this.$store.dispatch(ADD_PROGRAM_REQUEST, this.form);
					this.show = false;
				} catch (err) {
					let error = await err;

					this.$store.dispatch(ADD_PROGRAM_ERROR);
					this.show = false;
					this.showError(error, 'error');
				}
		},
	},
	computed: {
		...mapGetters(['isProgramsLoaded', 'getUser']),
		show: {
			get() {
				return this.visible;
			},
			set(value) {
				if (!value) {
					this.$emit('close');
				}
			},
		},
	},
};
</script>
<style less>
.otp-input {
	width: 40px;
	height: 40px;
	padding: 5px;
	margin: 0 10px;
	font-size: 20px;
	border-radius: 4px;
	border: 1px solid hsl(184, 100%, 37%);
	text-align: center;
}
.otp-input.error {
	border: 1px solid red !important;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
.otp__card {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.flaticon-smartphone {
	font-size: 48px;
	color: #00b1bc;
	animation: shake 1.5s;
	animation-iteration-count: infinite;
}
#custom__headline {
	font-size: 1rem !important;
	padding: 5px 16px;
}

@keyframes shake {
	10%,
	90% {
		transform: translate3d(-1px, 0, 0);
	}

	20%,
	80% {
		transform: translate3d(2px, 0, 0);
	}

	30%,
	50%,
	70% {
		transform: translate3d(-4px, 0, 0);
	}

	40%,
	60% {
		transform: translate3d(4px, 0, 0);
	}
}
</style>
