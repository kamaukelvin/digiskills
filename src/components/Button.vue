<template>
	<component :is="type" :href="href" :to="to" class="primary__button btn btn-md">
		<slot />
	</component>
</template>
<script>
export default {
	name: 'Button',
	props: {
		href: {
			type: String,
			default: null,
		},
		to: {
			type: String,
			default: null,
		},
	},
	computed: {
		type() {
			if (this.href) {
				return 'a';
			} else if (this.to) {
				return 'router-link';
			} else return 'button';
		},
	},
};
</script>
<style>
.primary__button {
	background: #00b1bc;
	color: #fff !important;
	font-size: 13px;
	padding: 0.375rem 2.2rem;
	border: 2px solid #00b1bc;
}
.primary__button:hover {
	border: 2px solid #00b1bc;
	transition: 0.3s;
}
.primary__button:focus {
	box-shadow: none;
}
</style>
