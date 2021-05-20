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
	font-size: 13px;
	padding: 0.375rem 2.2rem;
	border: 2px solid #00b1bc;
}
.primary__button:hover {
	background: #fff;
	color: #00b1bc;
	border: 2px solid #00b1bc;
	transition: 0.3s;
}
</style>
