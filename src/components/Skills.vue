<template>
	<div>
		<div>{{ this.skills }}</div>
		<transition-group name="list-complete" tag="ul">
			<li v-for="program in this.test" :key="program" class="list-complete-item">{{ program }}</li>
		</transition-group>
		<button @click="shuffle()">shuffle</button>

		<ul class="skills">
			<li>
				<h1>{{ this.skills[0] }}</h1>
			</li>
			<li>
				<ul>
					<li><h5>UI/UX Design</h5></li>
					<li><h4>Interior Design</h4></li>
					<li><h5>Research</h5></li>
				</ul>
			</li>
			<li>
				<ul>
					<li><h4 id="h4--bold">Marketing</h4></li>
					<li><h5 id="h5--light">System Analysis</h5></li>
					<li><h4>Digital Marketing</h4></li>
				</ul>
			</li>
			<li>
				<ul>
					<li><h4>Data Science</h4></li>
					<li><h5>Data Analysis</h5></li>
					<li><h4>Data Engineering</h4></li>
				</ul>
			</li>
			<li>
				<ul>
					<li><h4>Physics</h4></li>
					<li>
						<h3>{{ this.skills[2] }}</h3>
					</li>
					<li><h5>Radiology</h5></li>
				</ul>
			</li>
			<li>
				<ul>
					<li><h3>Physiology</h3></li>
					<li><h5>Animation</h5></li>
					<li><h4>Geography</h4></li>
				</ul>
			</li>
			<li>
				<ul>
					<li><h5>Automotive Engineering</h5></li>
					<li><h4>Online Marketing</h4></li>
					<li><h5>Dentistry</h5></li>
				</ul>
			</li>
			<li>
				<h2>{{ this.skills[1] }}</h2>
			</li>
		</ul>
	</div>
</template>
<script>
import _ from 'lodash';
export default {
	name: 'Skills',
	props: ['sorted'],
	data() {
		return {
			skills: [],
		};
	},
	methods: {
		shuffle: function() {
			this.test = _.shuffle(this.test);
		},
	},
	mounted() {
		console.log('the sorted ones', this.sorted);
		this.sorted.map((program) => {
			let _skills = [...this.skills, program.program_name];
			this.skills = _skills;
		});

		console.log('new skils', this.skills);
	},
};
</script>
<style scoped>
ul {
	margin-bottom: 0;
}

ul li {
	list-style-type: none;
	text-transform: uppercase;
	text-align: center;
	text-transform: Capitalize;
}
.skills ul li,
h1,
h2,
h3,
h4,
h5 {
	display: inline;
	margin-bottom: 0;
}

.skills h1 {
	color: #00b1bc;
	font-size: 29px;
	font-weight: 700;
}
.skills h2 {
	color: #00b1bc;
	font-size: 24px;
	font-weight: 700;
}
.skills h3 {
	color: #00b1bc;
	font-size: 20px;
	font-weight: 700;
}
.skills h4 {
	color: #06685c;
	font-size: 17px;
}
#h4--bold {
	color: #00b1bc;
	font-size: 17px;
	font-weight: 700;
}
.skills h5 {
	color: #575f6e;
	font-size: 12px;
	padding: 0 0.6em;
}
#h5--light {
	color: #0baa97;
	font-size: 13px;
}
.list-complete-item {
	transition: all 1s;
	display: inline-block;
	margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for <2.1.8 */ {
	opacity: 0;
	transform: translateY(30px);
}
.list-complete-leave-active {
	position: absolute;
}
</style>
