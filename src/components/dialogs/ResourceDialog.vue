<template>
	<v-row justify="center">
		<v-dialog v-model="show" persistent max-width="650">
			<v-card>
				<v-card-title class="">
					Add Resource<v-btn class="ml-auto" icon @click="show = false">
						<v-icon>mdi-close</v-icon>
					</v-btn>
				</v-card-title>
				<v-card-text>
					<v-form v-model="valid" ref="form">
						<v-row>
							<v-col cols="12" md="12">
								<v-text-field
									v-model="form.title"
									:rules="[(v) => !!v || 'Resource Title is required']"
									label="Resource Title"
									required
								></v-text-field>
							</v-col>

							<v-col cols="12" md="12">
								<v-text-field
									v-model="form.author_name"
									:rules="[(v) => !!v || 'Author Name is required']"
									label="Author Name"
									required
								></v-text-field>
							</v-col>
							<v-col cols="12" md="12">
								<v-text-field
									v-model="form.institution"
									:rules="[(v) => !!v || 'Institution is required']"
									label="Institution Name"
									required
								></v-text-field>
							</v-col>

							<v-col cols="12" md="12">
								<v-textarea
									:rules="[(v) => !!v || 'Excerpt is required']"
									label="Excerpt"
									class="mb-2"
									required
									rows="4"
									v-model="form.text"
								></v-textarea>
							</v-col>
						</v-row>
						<v-btn
							type="button"
							@click.prevent="validate"
							class="mb-3"
							:disabled="isLoadingResources"
							color="primary"
						>
							<span v-if="isLoadingResources"
								>Please wait...<v-progress-circular
									indeterminate
									:size="17"
									:width="2"
									class="ml-2"
									color="white"
								></v-progress-circular
							></span>
							<span v-else> Add Resource</span>
						</v-btn>
					</v-form>
				</v-card-text>
			</v-card>
		</v-dialog>
	</v-row>
</template>
<script>
import { mapGetters } from 'vuex';
import { ADD_RESOURCE_REQUEST, ADD_RESOURCE_ERROR } from '../../store/actions/resources';

export default {
	name: 'ResourceDialog',
	props: ['visible'],
	data() {
		return {
			valid: true,

			form: {
				title: '',
				author_name: '',
				institution: '',
				text: '',
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
					await this.$store.dispatch(ADD_RESOURCE_REQUEST, this.form);
					this.show = false;
				} catch (err) {
					let error = await err;

					this.$store.dispatch(ADD_RESOURCE_ERROR);
					this.show = false;
					this.showError(error, 'error');
				}
		},
	},
	computed: {
		...mapGetters(['isLoadingResources']),
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
