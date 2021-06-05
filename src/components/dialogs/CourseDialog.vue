<template>
	<v-row justify="center">
		<v-dialog v-model="show" persistent max-width="650">
			<v-card>
				<v-card-title class="">
					Add Course
				</v-card-title>
				<v-card-text>
					<v-form v-model="valid" ref="form">
						<v-row>
							<v-col cols="12" md="6">
								<v-select
									v-model="form.program"
									:items="title"
									:rules="[(v) => !!v || 'Program title is required']"
									label="Program Title"
									required
								></v-select>
							</v-col>
							<v-col cols="12" md="6">
								<v-select
									v-model="form.title"
									:items="title"
									:rules="[(v) => !!v || 'Course title is required']"
									label="Course Title"
									required
								></v-select>
							</v-col>
							<v-col cols="12" md="6">
								<v-select
									v-model="form.cost"
									:items="cost"
									:rules="[(v) => !!v || 'Cost is required']"
									label="Average Cost"
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
									v-model="form.duration"
									:items="duration"
									:rules="[(v) => !!v || 'Duration is required']"
									label="Duration"
									required
								></v-select>
							</v-col>
							<v-col cols="12" md="12">
								<v-textarea
									outlined
									:rules="[(v) => !!v || 'Description is required']"
									label="Description"
									class="mb-2"
									required
									rows="2"
									v-model="form.description"
								></v-textarea>
							</v-col>
						</v-row>
						<v-btn
							type="button"
							@click="validate"
							class="mb-3"
							:disabled="isProgramsLoaded"
							color="primary"
						>
							<span v-if="isProgramsLoaded"
								>Please wait...<v-progress-circular
									indeterminate
									:size="17"
									:width="2"
									class="ml-2"
									color="white"
								></v-progress-circular
							></span>
							<span v-else> Add Course</span>
						</v-btn>
					</v-form>
				</v-card-text>
			</v-card>
		</v-dialog>
	</v-row>
</template>
<script>
import { mapGetters } from 'vuex';
import { COURSE_REQUEST, COURSE_ERROR } from '../../store/actions/programs';

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
			duration: ['1 - 2 weeks', '2 - 4 weeks'],

			form: {
				title: null,
				cost: null,
				location: '',
				duration: null,
				description: '',
				program: '',
			},
		};
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
					// console.log('THE FORM TO COURSE', this.form);
					await this.$store.dispatch(COURSE_REQUEST, this.form);
					this.show = false;
				} catch (err) {
					let error = await err;

					this.$store.dispatch(COURSE_ERROR);
					this.show = false;
					this.showError(error, 'error');
				}
		},
	},
	computed: {
		...mapGetters(['isProgramsLoaded']),
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
