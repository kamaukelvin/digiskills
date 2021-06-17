<template>
	<div v-if="reviews.length === 0">
		<div class="card empty--card">
			<div class="card-body">
				<p class="text-center">No reviews currently for this program</p>
			</div>
		</div>
	</div>
	<v-row v-else>
		<v-col v-for="(item, i) in reviews" :key="i" cols="12">
			<v-card>
				<div class="d-flex flex-no-wrap">
					<v-avatar class="m-3" size="135" tile>
						<v-img class="review--image" :src="item.src"></v-img>
					</v-avatar>
					<div>
						<v-card-title class="card--title" v-text="item.title"></v-card-title>

						<v-card-subtitle class="card--subtitle" v-text="item.artist"></v-card-subtitle>
						<v-card-text
							>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
							1500s, when an unknown printer took a galley of type and scrambled.</v-card-text
						>
					</div>
				</div>
				<v-card-actions class="card-footer">
					<span class="pr-md-3">March 2021</span>
					<v-rating
						class="pl-md-3 review--rating "
						v-model="rating"
						background-color="orange lighten-3"
						color="orange"
						small
					></v-rating>
				</v-card-actions>
			</v-card>
		</v-col>
	</v-row>
</template>
<script>
export default {
	name: 'ReviewCard',
	props: ['reviews'],
	data: () => ({
		items: [
			{
				src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
				title: 'Supermodel',
				artist: 'Foster the People',
			},
			{
				src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
				title: 'Halcyon Days',
				artist: 'Ellie Goulding',
			},
		],
	}),
};
</script>
<style scoped>
/* to be removed  */
.card--title {
	color: #00466e;
	font-size: 16px;
	font-weight: 700;
	line-height: 1;
}
.card--subtitle {
	color: #00b1bc !important;
	font-size: 13px;
	font-weight: 700;
	padding-bottom: 5px;
}
.card-footer {
	border-top: 1px solid #dfe4ed;
	background: #fff;
	padding: 16px;
}
.card-footer span {
	font-size: 12px;
}
.review--rating {
	border-left: 2px solid #000;
}
.review--image {
	border-radius: 10px;
}
</style>
