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
				<Button title="Go" />
				<!-- <div class="input-group input-group-sm">
					<v-select :items="items" label="" dense outlined></v-select>
				</div>

				<div class="input-group input-group-sm">
					<v-select :items="items" label="" dense outlined></v-select>
				</div> -->
			</form>
		</div>
	</div>
</template>
<script>
import Button from '../components/Button';
export default {
	name: 'Search',
	components: {
		Button,
	},
	data: () => ({
		items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
	}),
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
#search--form div {
	margin: 0 0.5em;
}
#search--form h5 {
	color: #00466e;
	padding: 0 1em;
	font-size: 14px;
	margin-bottom: 0;
	font-weight: 700;
}
</style>
