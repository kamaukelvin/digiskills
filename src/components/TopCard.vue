<template>
	<div class="card program--top--card">
		<div class="card-body">
			<h3 class="top--card--title">
				{{ details.program.program_name }}
			</h3>
			<ul class="top--card--list">
				<li>{{ details.program.type }}</li>
				<li>{{ details.program.availabilty }}</li>
				<li>{{ details.program.location }}</li>
				<li>
					<span><i class="flaticon-star"/></span>4
				</li>
			</ul>
			<div v-if="details.courses.length === 0"><p>No Courses available for this program</p></div>
			<ul v-else class="chip--list">
				<li>
					<v-chip class="ma-2 top--card--chips" small label color="#00b1bc" text-color="#fff">
						SEO
					</v-chip>
				</li>
				<li>
					<v-chip class="ma-2 top--card--chips" small label color="#00b1bc" text-color="#fff">
						Digital Marketing
					</v-chip>
				</li>
				<li>
					<v-chip class="ma-2 top--card--chips" small label color="#00b1bc" text-color="#fff">
						data analysis
					</v-chip>
				</li>
				<li>
					<v-chip class="ma-2 top--card--chips" small label color="#00b1bc" text-color="#fff">
						Data science
					</v-chip>
				</li>
				<li>
					<v-chip class="ma-2 top--card--chips" small label color="#00b1bc" text-color="#fff">
						Accounting
					</v-chip>
				</li>
			</ul>
			<ul class="contacts">
				<li>
					<span><i class="flaticon-phone"></i></span>{{ details.organizations[0].phone }}
				</li>
				<li>
					<span><i class="flaticon-envelope"></i></span>{{ details.organizations[0].email }}
				</li>
				<li>
					<span><i class="flaticon-world"></i></span>{{ details.organizations[0].website }}
				</li>
			</ul>
			<Btn :href="details.organizations[0].website">Visit Website</Btn>
		</div>
	</div></template
>
<script>
import Btn from './Button';
export default {
	name: 'TopCard',
	props: ['details'],
	components: {
		Btn,
	},
};
</script>
<style scoped>
.program--top--card {
	margin-top: 2.5em;
	border-radius: 10px;
}
.top--card--title {
	color: #000;
	font-weight: 700;
	font-size: 22px;
}

ul {
	list-style-type: none;
}
.top--card--list li {
	display: inline;
	padding: 0 2em 0 0;
	font-size: 14px;
	color: #575f6e;
	text-transform: capitalize;
}
.top--card--list li:nth-child(1n + 2):not(:last-child) {
	color: #00b1bc;
}
.top--card--list li:last-child span {
	color: #f4b223;
	padding-right: 10px;
}
.top--card--chips {
	text-transform: uppercase;
}
.chip--list li {
	display: inline;
	margin: 0 0.2em;
}
.contacts li {
	display: inline;
	margin: 0 1.2em 0 0;
	color: #575f6e;
	font-size: 14px;
}
.flaticon-phone,
.flaticon-envelope,
.flaticon-world {
	color: #00b1bc;
	margin-right: 0.7em;
}
</style>
