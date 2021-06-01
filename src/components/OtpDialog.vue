<template>
	<v-row justify="center">
		<v-dialog v-model="dialog" persistent max-width="550">
			<template v-slot:activator="{ on, attrs }">
				<v-btn color="primary" dark v-bind="attrs" v-on="on">
					Open Dialog
				</v-btn>
			</template>
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

						<Button title="Verify" class="my-2" @click="dialog = false" />
					</v-card-text>
				</div>
			</v-card>
		</v-dialog>
	</v-row>
</template>
<script>
import Button from './Button';
export default {
	name: 'OtpDialog',
	props: {
		dialog: Boolean,
	},
	components: { Button },
	data() {
		return {};
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
	font-size: 1rem;
	padding: 5px 16px;
}
</style>
