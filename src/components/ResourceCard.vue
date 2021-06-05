<template>
	<div class="card resource--card">
		<div class="card-body">
			<router-link to="/resources/1">
				<h3 class="card--title">
					New Trends in UX 2021: What the UI/UX revolution means for designer
				</h3>
				<h4 class="card--subtitle">Barbara Kimosop - University of Nairobi</h4>
			</router-link>
			<div class="resource--excerpt">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
				industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
				scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
				type and scrambled.
			</div>
		</div>
		<div class="card-footer">
			<small class="resource--date">Apr 2021</small>
			<router-link to="/resources/1" class="resource--link">Read More</router-link>
		</div>
	</div>
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
	margin: 2em 0;
}
.resource--excerpt {
	color: #000;
	font-size: 16px;
}
.resource--date {
	color: #000;
	float: left;
	font-size: 14px;
	float: left;
}
.resource--link {
	color: #00b1bc;
	margin-left: auto;
	font-size: 15px;
	float: right;
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
	font-size: 14px;
	font-weight: 700;
	padding-bottom: 5px;
}

.card-footer {
	background: #fff;
	border-top: none;
	border-radius: 0 0 10px 10px;
}
a {
	text-decoration: none;
}
</style>
