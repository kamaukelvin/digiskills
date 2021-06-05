<template>
	<v-row justify="center">
		<v-dialog v-model="show" persistent max-width="650">
			<v-card>
				<v-stepper alt-labels v-model="step">
					<v-stepper-header>
						<v-stepper-step step="1" :complete="step > 1"> Profile </v-stepper-step>
						<v-divider></v-divider>
						<v-stepper-step step="2" :complete="step > 2">About</v-stepper-step>
						<v-divider></v-divider>
						<v-stepper-step step="3">Contact Details</v-stepper-step>
					</v-stepper-header>
					<v-stepper-items>
						<v-stepper-content step="1">
							<v-card-text>
								Please fill in your organization’s profile data below. It will only take a couple of
								minutes. Thank you.

								<v-form ref="form" v-model="valid" lazy-validation>
									<v-text-field
										v-model="form.name"
										:rules="[(v) => !!v || 'Name is required']"
										label="Name"
										class="mb-3"
										required
									></v-text-field>
									<v-select
										v-model="form.category"
										:items="genders"
										:rules="[(v) => !!v || 'Category is required']"
										class="mb-3"
										label="Category"
										required
									></v-select>
									<v-combobox
										v-model="form.courses"
										:items="genders"
										label="Courses Offered"
										multiple
										class="mb-3"
										:rules="[(v) => !!v || 'Course is required']"
										chips
										required
									>
										<template v-slot:selection="data">
											<v-chip
												:key="JSON.stringify(data.item)"
												v-bind="data.attrs"
												:input-value="data.selected"
												:disabled="data.disabled"
												close
												small
												@click:close="data.parent.selectItem(data.item)"
											>
												{{ data.item }}
											</v-chip>
										</template>
									</v-combobox>
									<v-row>
										<v-col cols="12" md="6">
											<v-select
												v-model="form.year_establish"
												:items="genders"
												:rules="[(v) => !!v || 'Year is required']"
												class="mb-3"
												label="Year Established"
												required
											></v-select>
										</v-col>
										<v-col cols="12" md="6">
											<v-select
												v-model="form.country_of_operation"
												:items="genders"
												:rules="[(v) => !!v || 'Country is required']"
												class="mb-3"
												label="Primary Country of Operation"
												required
											></v-select>
										</v-col>
									</v-row>

									<v-file-input
										v-model="form.image"
										accept="image/*"
										label="Upload Logo"
										prepend-icon="mdi-camera"
										:rules="[(v) => !!v || 'Logo is required']"
										class="mb-2"
										required
									></v-file-input>

									<v-btn color="primary" class="mr-4" @click="validate">
										Next
									</v-btn>
								</v-form>
							</v-card-text>
						</v-stepper-content>
						<v-stepper-content step="2">
							<v-card-text>
								<v-form ref="formAbout" v-model="valid">
									<v-select
										v-model="form.program_duration"
										:items="genders"
										:rules="[(v) => !!v || 'Duration is required']"
										class="mb-3"
										label="Length of typical Program"
										required
									></v-select>
									<v-textarea
										name="description"
										counter
										:rules="[
											(v) =>
												!!v ||
												'Brief Description is required' ||
												v.length <= 250 ||
												'Max 250 characters',
										]"
										label="Please describe your organization"
										class="mb-3"
										required
										rows="3"
										v-model="form.description"
									></v-textarea>
									<v-textarea
										counter
										name="remarks"
										:rules="[(v) => !!v || v.length <= 250 || 'Max 250 characters']"
										label="Additional Remarks"
										class="mb-3"
										rows="3"
										required
										v-model="form.additional_remarks"
									></v-textarea>
									<v-btn color="primary" class="mr-4" @click="step = 1">
										Back
									</v-btn>
									<v-btn color="primary" class="mr-4" @click="validateAbout">
										Next
									</v-btn>
								</v-form>
							</v-card-text>
						</v-stepper-content>
						<v-stepper-content step="3">
							<v-card-text>
								<v-form v-model="valid">
									<v-text-field
										v-model="form.phone"
										:rules="[(v) => !!v || 'Phone Number is required']"
										label="Phone Number"
										class="mb-3"
										required
									></v-text-field>
									<v-text-field
										v-model="form.email"
										:rules="[
											(v) => !!v || 'Email is required',
											(v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
										]"
										label="Email Address"
										required
										class="mb-3"
									></v-text-field>
									<v-text-field
										v-model="form.website"
										:rules="[(v) => !!v || 'Website is required']"
										label="Website"
										class="mb-3"
										required
									></v-text-field>
									<v-row>
										<v-col cols="12" md="6">
											<v-text-field
												v-model="form.address"
												:rules="[(v) => !!v || 'Address is required']"
												label="Current Address"
												class="mb-3"
												required
											></v-text-field>
										</v-col>
										<v-col cols="12" md="6">
											<v-text-field
												v-model="form.city"
												:rules="[(v) => !!v || 'City is required']"
												label="City"
												class="mb-3"
												required
											></v-text-field>
										</v-col>
									</v-row>
									<v-text-field
										v-model="form.postal_code"
										:rules="[(v) => !!v || 'Postal Code is required']"
										label="Postal"
										class="mb-3"
										required
									></v-text-field>

									<v-btn color="primary" class="mr-4" @click="step = 2">
										Back
									</v-btn>
									<v-btn
										color="primary"
										class="mr-4"
										@click="postProfile"
										:disabled="isLoadingProfile"
									>
										<span v-if="isLoadingProfile"
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
import { POST_PROFILE_REQUEST, POST_PROFILE_ERROR } from '../../store/actions/profile';
export default {
	name: 'Review',
	props: ['visible'],
	data() {
		return {
			valid: true,
			step: 1,
			gender: null,
			genders: ['Male', 'Female', 'Other'],

			form: {
				name: '',
				category: '',
				courses: '',
				year_establish: '',
				country_of_operation: '',
				image: null,
				program_duration: '',
				additional_remarks: '',
				description: '',
				phone: '',
				email: '',
				address: '',
				website: '',
				city: '',
				postal_code: '',
				about: 'about',
			},
		};
	},
	methods: {
		validate() {
			this.$refs.form.validate();
			if (this.valid) {
				this.step = 2;
			}
		},
		validateAbout() {
			this.$refs.formAbout.validate();
			if (this.valid) {
				this.step = 3;
			}
		},
		showError(message, type) {
			this.$toast.open({
				message: message,
				type: type,
			});
		},
		async postProfile() {
			try {
				await this.$store.dispatch(POST_PROFILE_REQUEST, this.form);
				this.show = false;
				this.showError('Successfully added Profile', 'success');
			} catch (err) {
				let error = await err;

				this.$store.dispatch(POST_PROFILE_ERROR);
				this.show = false;
				this.showError(error, 'error');
			}
			// this.$refs.form.validate();
		},
	},
	computed: {
		...mapGetters(['isLoadingProfile']),

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
