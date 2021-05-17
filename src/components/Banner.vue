<template>
	<div class="banner">
		<div class="container">
			<div class="card banner--card">
				<div class="card-body">
					<carousel :items="1" :dots="false" :nav="false">
						<div>
							<h6 class="carousel--title">About DigiSkills Africa</h6>
							<p class="carousel--excerpt">
								DigiSkills Africa is a trusted platform where you can search, review, and compare
								international digital skills programs and opportunities. Start by searching over 15,467
								programs and select the type of experience you're interested in!
							</p>
						</div>
						<div>
							<h6>About DigiSkills Africa</h6>
							<p class="carousel--excerpt">
								DigiSkills Africa is a trusted platform where you can search, review, and compare
								international digital skills programs and opportunities. Start by searching over 15,467
								programs and select the type of experience you're interested in!
							</p>
						</div>
						<template class="banner--next" slot="prev">A</template>
						<template slot="next">B</template>
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
.banner--next {
	position: absolute;
	bottom: 0;
	right: 0;
}
.carousel--excerpt {
	font-size: 13px;
	font-weight: 700;
	color: #000;
}
</style>
