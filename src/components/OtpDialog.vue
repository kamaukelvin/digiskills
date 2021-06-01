<template>
	<v-row justify="center">
		<v-dialog v-model="show" persistent max-width="550">
			<v-card>
				<div class="otp__card">
					<i class="flaticon-envelope text-center my-3" />
					<v-card-title class="headline">
						Please Enter Otp to verify your account
					</v-card-title>
					<v-card-text class="text-center"
						>A one time password has been sent to .........
						<v-spacer></v-spacer>
						<v-spacer></v-spacer>
						<form @submit.prevent="verify">
							<input
								type="text"
								class="form-control form-control-sm"
								name="otp"
								v-validate="'required'"
								:class="{ 'is-invalid': submitted && errors.has('otp') }"
								v-model="otp"
							/>

							<div v-if="submitted && errors.has('otp')" class="invalid-feedback">
								{{ errors.first('otp') }}
							</div>
							<button type="submit" class="primary__button btn btn-md" @click.stop="show = false">
								Verify
							</button>
						</form>
					</v-card-text>
				</div>
			</v-card>
		</v-dialog>
	</v-row>
</template>
<script>
import { VERIFY_REQUEST } from '../store/actions/auth';
export default {
	name: 'OtpDialog',
	props: ['visible'],
	data() {
		return { otp: '', submitted: false };
	},
	methods: {
		showError(message, type) {
			this.$toast.open({
				message: message,
				type: type,
			});
		},

		verify() {
			this.submitted = true;
			this.$validator.validate().then(async (valid) => {
				if (valid) {
					this.$store
						.dispatch(VERIFY_REQUEST, this.otp)
						.then(() => {
							this.$router.push('/home');
						})
						.catch(async (err) => {
							let error = await err;
							this.showError(error, 'error');
						});
				}
			});
		},
	},
	computed: {
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
<style scoped>
.otp__card {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.otp__card i {
	font-size: 48px;
	color: #00b1bc;
}
.headline {
	font-size: 1rem !important;
	padding: 5px 16px;
}
</style>
