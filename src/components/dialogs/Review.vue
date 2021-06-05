<template>
	<v-row justify="center">
		<v-dialog v-model="show" persistent max-width="650">
			<v-card>
				<v-stepper alt-labels v-model="step">
					<v-stepper-header>
						<v-stepper-step step="1" :complete="step > 1">Step 1 </v-stepper-step>
						<v-divider></v-divider>
						<v-stepper-step step="2"> Step 2</v-stepper-step>
					</v-stepper-header>
					<v-stepper-items>
						<v-stepper-content step="1">
							<v-card-text>
								Please insert a short appropriate title for your testimonial and give a description of
								your experience with Digital Skills Program. Thank you.

								<v-form ref="form" v-model="valid" lazy-validation>
									<v-text-field
										v-model="form.title"
										:rules="titleRules"
										label="Short Title"
										class="mb-2"
										required
									></v-text-field>

									<v-textarea
										outlined
										name="review"
										:rules="reviewRules"
										label="Your Review"
										class="mb-2"
										required
										rows="2"
										v-model="form.review"
									></v-textarea>
									<v-file-input
										v-model="form.photo"
										accept="image/*"
										label="Upload Photo (optional)"
										prepend-icon="mdi-camera"
										class="mb-2"
									></v-file-input>
									<label>Leave a Star Rating</label>
									<v-rating
										v-model="form.rating"
										background-color="orange lighten-3"
										color="orange"
										medium
										class="mb-2"
										label="Upload Photo (optional)"
									></v-rating>

									<v-btn color="primary" class="mr-4" @click="validateStep1">
										Next
									</v-btn>
								</v-form>
							</v-card-text>
						</v-stepper-content>
						<v-stepper-content step="2">
							<v-card-text>
								Please fill in your personal profile below. It will only take a minute. Thank you.
								<v-form v-model="valid">
									<v-row>
										<v-col cols="12" md="6">
											<v-text-field
												v-model="form.firstname"
												:rules="firstNameRules"
												label="First name"
												required
											></v-text-field>
										</v-col>

										<v-col cols="12" md="6">
											<v-text-field
												v-model="form.lastname"
												:rules="lastNameRules"
												label="Last name"
												required
											></v-text-field>
										</v-col>
										<v-col cols="12" md="6">
											<v-text-field
												v-model="form.email"
												:rules="emailRules"
												label="Email Address"
												required
											></v-text-field>
										</v-col>
										<v-col cols="12" md="6">
											<v-text-field
												v-model="form.age"
												:rules="ageRules"
												label="Age"
												required
											></v-text-field>
										</v-col>
										<v-col cols="12" md="6">
											<v-select
												v-model="form.gender"
												:items="genders"
												:rules="[(v) => !!v || 'Gender is required']"
												label="Gender"
												required
											></v-select>
										</v-col>
										<v-col cols="12" md="6">
											<v-select
												v-model="form.citizenship"
												:items="citizens"
												:rules="[(v) => !!v || 'Item is required']"
												label="Citizenship"
												required
											></v-select>
										</v-col>
									</v-row>
									<v-checkbox
										v-model="form.terms"
										:rules="[(v) => !!v || 'You must agree to continue!']"
										label="By checking this box, I consent to digiskills.com collecting and storing my data through the submission of this form. By submitting this form, I agree to DigiSkill's Terms & Conditions."
										required
									></v-checkbox>
									<v-btn color="primary" class="mr-4" @click="step = 1">
										Back
									</v-btn>
									<v-btn color="primary" class="mr-4" @click="review" :disabled="isLoadingReviews">
										<span v-if="isLoadingReviews"
											>Please wait...<v-progress-circular
												indeterminate
												:size="17"
												:width="2"
												class="ml-2"
												color="white"
											></v-progress-circular
										></span>
										<span v-else> Finish</span>
									</v-btn>
								</v-form>
							</v-card-text>
						</v-stepper-content>
					</v-stepper-items>
				</v-stepper>
			</v-card>
		</v-dialog>
	</v-row>
</template>
<script>
import { mapGetters } from 'vuex';
import { ADD_REVIEWS_REQUEST, ADD_REVIEWS_ERROR } from '../../store/actions/reviews';
export default {
	name: 'Review',
	props: ['visible'],
	data() {
		return {
			valid: true,
			step: 1,
			titleRules: [(v) => !!v || 'Short title is required'],
			reviewRules: [(v) => !!v || 'Review is required'],
			firstNameRules: [(v) => !!v || 'First Name is required'],
			lastNameRules: [(v) => !!v || 'Last Name is required'],
			emailRules: [(v) => !!v || 'E-mail is required', (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
			gender: null,
			genders: ['Male', 'Female', 'Other'],
			citizenship: null,
			citizens: ['Kenyan', 'Uganda', 'Tanzania'],

			form: {
				title: '',
				review: '',
				terms: false,
				firstname: '',
				lastname: '',
				email: '',
				age: '',
				gender: '',
				citizenship: '',
				photo: null,
				rating: 0,
			},
		};
	},
	methods: {
		validateStep1() {
			// this.$refs.form.validate();
			this.step = 2;
		},
		showError(message, type) {
			this.$toast.open({
				message: message,
				type: type,
			});
		},
		async review() {
			try {
				await this.$store.dispatch(ADD_REVIEWS_REQUEST, this.form);
				this.show = false;
				this.showError('Successfully added review', 'success');
			} catch (err) {
				let error = await err;

				this.$store.dispatch(ADD_REVIEWS_ERROR);
				this.show = false;
				this.showError(error, 'error');
			}
			// this.$refs.form.validate();
		},
	},
	computed: {
		...mapGetters(['isLoadingReviews']),
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
