<template>
	<v-card :loading="loading" class="my-5 resource--card" elevation="0">
		<v-card-title class="card--title"
			>New Trends in UX 2021: What the UI/UX revolution means for designers</v-card-title
		>
		<v-card-subtitle class="card--subtitle">Barbara Kimosop - University of Nairobi</v-card-subtitle>

		<v-card-text class="resource--excerpt">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
			industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
			scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
			the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
			scrambled.
		</v-card-text>
		<v-card-actions>
			<span class="resource--date">Apr 2021</span>
			<a href="#" class="resource--link">Read More</a>
		</v-card-actions>
	</v-card>
</template>
<script>
export default {
	name: 'ResourceCard',
};
</script>
<style scoped>
.resource--card {
	border-radius: 10px;
	box-shadow: none;
}
.resource--excerpt {
	color: #000;
	font-size: 16px;
}
.resource--date {
	color: #000;
	float: left;
	font-size: 14px;
}
.resource--link {
	color: #00b1bc;
	margin-left: auto;
	font-size: 14px;
}
/* to be removed  */
.card--title {
	color: #00466e;
	font-size: 16px;
	font-weight: 700;
	line-height: 1.2;
}
.card--subtitle {
	color: #00b1bc !important;
	font-size: 13px;
	font-weight: 700;
	padding-bottom: 5px;
}
</style>
