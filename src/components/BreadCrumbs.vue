<template>
	<div class="featured--header">
		<v-breadcrumbs :items="items" divider="/" class="float-left"></v-breadcrumbs>
	</div>
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
