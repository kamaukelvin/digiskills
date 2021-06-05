<template>
	<div class="bg">
		<Navbar />
		<Banner />
		<div class="container">
			<Search />
			<div class="resources--header">
				<BreadCrumbs />
				<div>
					<a href="#" class="resources--link"
						>Add a resource <span><i class="flaticon-plus"/></span
					></a>
				</div>
			</div>
			<div>
				<ResourceCard />
				<ResourceCard />
				<ResourceCard />
				<ResourceCard />
			</div>
		</div>
		<Footer />
	</div>
</template>
<script>
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Search from '../components/Search';
import ResourceCard from '../components/ResourceCard';
import BreadCrumbs from '../components/BreadCrumbs';
export default {
	name: 'Resources',
	components: {
		Banner,
		Footer,
		Navbar,
		Search,
		BreadCrumbs,
		ResourceCard,
	},
};
</script>
<style scoped>
.resources--header {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.resources--link {
	color: #575f6e;
	font-size: 16px;
	font-weight: 600;
}
.resources--link:hover {
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
</style>
