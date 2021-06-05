<template>
	<div>
		<div class="card about--card">
			<div class="card-body">
				<h3 class="title">About</h3>
				<p>
					{{ details.program.about }}
				</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'About',
	props: ['details'],
};
</script>
<style scoped>
.about--card {
	border-radius: 10px;
	margin: 2em 0;
}
</style>
