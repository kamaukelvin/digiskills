<template>
	<div v-if="$store.state.resources.loading">
		<PageLoader />
	</div>
	<div class="bg" v-else>
		<Navbar />
		<Banner />
		<div class="container">
			<Search />
			<div class="resources--header">
				<BreadCrumbs />
				<div>
					<a v-if="isInstitution" href="#" class="resources--link" @click="showResourcesDialog = true"
						>Add a resource <span><i class="flaticon-plus"/></span
					></a>
					<ResourceDialog :visible="showResourcesDialog" @close="showResourcesDialog = false" />
				</div>
			</div>
			<div>
				<div v-if="getResources.length === 0" class="card empty--card">
					<div class="card-body">
						<p class="text-center">Currently no resources uploaded</p>
					</div>
				</div>
				<ResourceCard v-else v-for="resource in getResources" :key="resource.id" :resource="resource" />
			</div>
		</div>
		<Footer />
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Search from '../components/Search';
import ResourceCard from '../components/ResourceCard';
import PageLoader from '../components/loaders/PageLoader';
import BreadCrumbs from '../components/BreadCrumbs';
import ResourceDialog from '../components/dialogs/ResourceDialog.vue';
import { RESOURCES_REQUEST } from '../store/actions/resources';
export default {
	name: 'Resources',
	components: {
		Banner,
		Footer,
		Navbar,
		Search,
		BreadCrumbs,
		ResourceCard,
		ResourceDialog,
		PageLoader,
	},
	data() {
		return { showResourcesDialog: false };
	},
	computed: {
		...mapGetters(['isInstitution', 'isLoadingResources', 'getResources']),
	},
	async mounted() {
		await this.$store.dispatch(RESOURCES_REQUEST);
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
