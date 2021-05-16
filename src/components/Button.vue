<template>
	<div>
		<button class="primary__button btn btn-md">{{ title }}</button>
	</div>
</template>
<script>
export default {
	name: 'Button',
	props: {
		title: String,
	},
};
</script>
<style scoped>
.primary__button {
	background: #00b1bc;
	color: #fff;
	font-size: 14px;
	padding: 0.375rem 2.2rem;
}
</style>
