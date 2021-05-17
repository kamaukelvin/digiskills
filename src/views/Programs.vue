<template>
	<div class="bg">
		<Navbar />
		<Banner />
		<div class="container">
			<Search />
			<div class="featured--header">
				<BreadCrumbs />
				<div>
					<a href="#" class="program--link"
						>Add a program <span><i class="flaticon-plus"/></span
					></a>
				</div>
			</div>
			<carousel :items="3" :dots="false" class="mx-auto">
				<FeaturedCard />
				<FeaturedCard />
				<FeaturedCard />
			</carousel>
			<section>
				<div class="all--programs--header">
					<h6>Browse over 1260 programs that match your interest</h6>
					<div>
						Sort by:
					</div>
				</div>
				<ProgramCard />
				<ProgramCard />
				<ProgramCard />
				<ProgramCard />
				<div class="d-flex justify-content-center align-items-center my-4">
					<Button title="Show more" />
				</div>
			</section>
		</div>
		<Footer />
	</div>
</template>
<script>
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Search from '../components/Search';
import FeaturedCard from '../components/FeaturedCard';
import ProgramCard from '../components/ProgramCard';
import Footer from '../components/Footer';
import carousel from 'vue-owl-carousel';
import BreadCrumbs from '../components/BreadCrumbs';
export default {
	name: 'Programs',
	components: {
		Search,
		FeaturedCard,
		ProgramCard,
		Navbar,
		Banner,
		Footer,
		carousel,
		BreadCrumbs,
	},
};
</script>
<style scoped>
.featured--header {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.program--link {
	color: #575f6e;
	font-size: 16px;
	font-weight: 600;
}
.program--link:hover {
	color: #00b1bc;
	text-decoration: none;
}
.flaticon-plus {
	color: #00b1bc;
	font-size: 22px;
	padding-left: 7px;
}

.flaticon-placeholder {
	font-size: 10px;
	padding-right: 5px;
}
.all--programs--header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 0;
}
.all--programs--header h6 {
	color: #000;
	font-weight: 700;
	font-size: 16px;
}
</style>
