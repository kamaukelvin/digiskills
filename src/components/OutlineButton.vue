<template>
	<div>
		<component :is="type" :href="href" :to="to" class="outline__button btn btn-md"><slot /></component>
	</div>
</template>
<script>
export default {
	name: 'OutlineButton',
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
<style scoped>
.outline__button {
	background: #fff;
	color: #00b1bc;
	font-size: 13px;
	padding: 0.375rem 2.2rem;
	border: 2px solid #00b1bc;
	transition: 0.3s;
}
.outline__button:hover {
	background: #00b1bc;
	color: #fff;
}
.outline__button:focus {
	box-shadow: none;
}
</style>
