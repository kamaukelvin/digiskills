<template>
	<div class="card program--top--card">
		<div class="card-body">
			<h3 class="top--card--title">
				Digital Skills Program
			</h3>
			<ul class="top--card--list">
				<li>Start-Up</li>
				<li>Available Online</li>
				<li>Nairobi, Kenya</li>
				<li>4</li>
			</ul>
			<ul class="chip--list">
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
				<li>+254-770-454-889</li>
				<li>digiskills254@gmail.com</li>
				<li>www.digiskills254.com</li>
			</ul>
			<Button title="Visit Website" />
		</div></div
></template>
<script>
import Button from './Button';
export default {
	name: 'TopCard',
	components: {
		Button,
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
.top--card--list li:last-child {
	color: red;
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
</style>
