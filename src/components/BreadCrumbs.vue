<template>
	<v-breadcrumbs :items="items" divider="/" class=""></v-breadcrumbs>
</template>
<script>
export default {
	name: 'BreadCrumbs',
	data: () => ({
		items: [
			{
				text: 'Top featured programs ',
				disabled: true,
				href: 'breadcrumbs_dashboard',
			},
			{
				text: 'Eastern Africa',
				disabled: false,
				href: 'breadcrumbs_link_1',
			},
		],
	}),
};
</script>
<style scoped></style>
