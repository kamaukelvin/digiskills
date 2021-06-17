<template>
	<div class="card resource--card">
		<div class="card-body">
			<router-link to="/resources/1">
				<h3 class="card--title">
					{{ resource.title }}
				</h3>
				<h4 class="card--subtitle">{{ resource.author_name }} - {{ resource.institution }}</h4>
			</router-link>
			<div class="resource--excerpt">
				{{ resource.text }}
			</div>
		</div>
		<div class="card-footer">
			<small class="resource--date">{{ moment(resource.date).format('MMM YYYY') }}</small>
			<router-link :to="`/resources/${resource.id}`" class="resource--link">Read More</router-link>
		</div>
	</div>
</template>
<script>
export default {
	name: 'ResourceCard',
	props: ['resource'],
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
