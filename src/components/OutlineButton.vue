<template>
	<div>
		<button class="outline__button btn btn-md">{{ title }}</button>
	</div>
</template>
<script>
export default {
	name: 'OutlineButton',
	props: {
		title: String,
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
