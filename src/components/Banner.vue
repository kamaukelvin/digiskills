<template>
	<div class="banner">
		<div class="container">
			<div class="card banner--card">
				<div class="card-body">
					<carousel :items="1" :dots="false" :nav="false" :loop="true">
						<template slot="prev"
							><span class="prevCarousel" id="prev"> <i class="flaticon-left"/></span
						></template>
						<div v-for="(item, i) in 5" :key="i">
							<h6 class="carousel--title">About DigiSkills Africa</h6>
							<p class="carousel--excerpt">
								DigiSkills Africa is a trusted platform where you can search, review, and compare
								international digital skills programs and opportunities. Start by searching over 15,467
								programs and select the type of experience you're interested in!
							</p>
						</div>

						<template slot="next"
							><span class="nextCarousel" id="next"> <i class="flaticon-right-arrow"/></span
						></template>
					</carousel>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import carousel from 'vue-owl-carousel';
export default {
	name: 'Banner',
	components: {
		carousel,
	},
};
</script>
<style scoped>
.banner {
	background: url('../assets/images/program-banner.png');
	min-height: 250px;
	background-position: center;
}
.banner--card {
	background: rgba(255, 255, 255, 0.7);
	max-width: 600px;
	margin: 2em 0;
	font-size: 14px;
}
.carousel--title {
	color: #00b1bc;
	font-weight: 700;
}
#next {
	position: absolute;
	bottom: 5px;
	right: 60px;
	cursor: pointer;
}
#prev {
	position: absolute;
	bottom: 5px;
	right: 90px;
	cursor: pointer;
}
.carousel--excerpt {
	font-size: 13px;
	font-weight: 700;
	color: #000;
}
.flaticon-left,
.flaticon-right-arrow {
	font-size: 1.4em;
	color: #00b1bc;
}
</style>
