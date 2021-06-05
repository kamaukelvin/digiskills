<template>
	<v-row justify="center">
		<v-dialog v-model="show" persistent max-width="550">
			<v-card>
				<div class="otp__card">
					<i class="flaticon-smartphone text-center mt-3" />
					<v-card-title class="headline" id="custom__headline">
						Please Enter Otp to verify your account
					</v-card-title>
					<v-card-text class="text-center">A one time password has been sent to ......... </v-card-text>
					<div class="mb-5">
						<v-otp-input
							ref="otpInput"
							input-classes="otp-input"
							separator="-"
							:num-inputs="4"
							:should-auto-focus="true"
							:is-input-num="true"
							@on-change="handleOnChange"
							@on-complete="handleOnComplete"
						/>
					</div>

					<button
						type="submit"
						class="primary__button btn btn-md mb-5"
						@click.stop="verify"
						:disabled="isLoading"
					>
						<span v-if="isLoading"
							>Please wait...<v-progress-circular
								indeterminate
								:size="17"
								:width="2"
								class="ml-2"
								color="white"
							></v-progress-circular
						></span>
						<span v-else> Verify</span>
					</button>
				</div>
			</v-card>
		</v-dialog>
	</v-row>
</template>
<script>
import { mapGetters } from 'vuex';
import { VERIFY_REQUEST } from '../../store/actions/auth';

export default {
	name: 'OtpDialog',
	props: ['visible'],
	data() {
		return { otp: '', otpComplete: false };
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

			if (this.otpComplete) {
				console.log('OTP IS COMPLETE RUNNN', this.otp);
				this.$store
					.dispatch(VERIFY_REQUEST, this.otp)
					.then(() => {
						this.show = false;
						this.handleClearInput();
						this.$router.push('/home');
					})
					.catch(async (err) => {
						let error = await err;
						this.show = false;
						this.handleClearInput();
						this.showError(error, 'error');
					});
			}
		},
		handleOnComplete(value) {
			this.otp = value;
			this.otpComplete = true;
			console.log('OTP completed: ', value);
		},
		handleOnChange(value) {
			console.log('OTP changed: ', value);
		},
		handleClearInput() {
			this.$refs.otpInput.clearInput();
		},
	},
	computed: {
		...mapGetters(['isLoading']),
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
