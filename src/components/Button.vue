<template>
	<div>
		<button class="primary__button btn btn-md" @click="clickHandler">{{ title }}</button>
	</div>
</template>
<script>
export default {
	name: 'Button',
	props: ['title'],
	created() {
		this.$emit('clickHandler');
	},
};
</script>
<style>
.primary__button {
	background: #00b1bc;
	color: #fff;
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
