<template>
	<div class="bg">
		<Navbar />
		<div class="banner">
			<div class="container">
				<div class="card banner--card">
					<div class="card-body">
						<h6>About DigiSkills Africa</h6>
						<p class="program--excerpt">
							DigiSkills Africa is a trusted platform where you can search, review, and compare
							international digital skills programs and opportunities. Start by searching over 15,467
							programs and select the type of experience you're interested in!
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<Search />
			<FeaturedPrograms />
			<AllPrograms />
		</div>
	</div>
</template>
<script>
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import FeaturedPrograms from '../components/FeaturedPrograms';
import AllPrograms from '../components/AllPrograms';
export default {
	name: 'Programs',
	components: {
		Search,
		FeaturedPrograms,
		AllPrograms,
		Navbar,
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
.banner--card h6 {
	color: #00b1bc;
	font-weight: 700;
}
.program--excerpt {
	font-size: 12px;
	font-weight: 700;
	color: #000;
}
</style>
