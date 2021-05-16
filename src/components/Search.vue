<template>
	<div class="card search--card">
		<div class="card-body">
			<form id="search--form">
				<h5>SEARCH</h5>
				<div class="input-group input-group-sm">
					<input
						type="text"
						class="form-control"
						placeholder="Enter Search title"
						aria-label="search input"
						aria-describedby="search-sm"
					/>
				</div>
				<div class="input-group input-group-sm">
					<select class="form-select form-select-sm" aria-label=".form-select-sm example">
						<option selected>Open this select menu</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
				</div>
				<select class="form-select form-select-sm" aria-label=".form-select-sm example">
					<option selected>Open this select menu</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>
			</form>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Search',
};
</script>
<style scoped>
.search--card {
	max-height: 95px;
	border-radius: 10px;
}
#search--form {
	display: flex;
	align-items: center;
}
#search--form h5 {
	color: #00466e;
	padding: 0 1em;
	font-size: 14px;
	margin-bottom: 0;
	font-weight: 700;
}
</style>
