<template>
	<div class="bg">
		<Navbar />
		<div class="container my-4">
			<div class="row ">
				<div class="col-md-3">
					<div class="card">
						<div class="card-body">
							<div class="article--sidebar">
								<span class="article--date">25 March 2021</span>
								<h5 class="article--author">
									Barbara Kimosop
									<span>University of Nairobi</span>
								</h5>
							</div>
							<ul id="social__links">
								<li>
									<span><i class="flaticon-facebook"/></span>
								</li>
								<li>
									<span><i class="flaticon-twitter"/></span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-9">
					<div class="card">
						<div class="card-body">
							<BreadCrumbs />

							<div class="position-relative">
								<div class="download--button">D</div>
								<h2 class="article--title">
									New Trends in UX 2021: What the UI/UX revolution means for designers
								</h2>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text.
								</p>
								<v-img :lazy-src="Image1" max-height="390" :src="Image1"></v-img>
								<div class="image--caption">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
								</div>
								<p v-for="(item, i) in 3" :key="i">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer.Lorem Ipsum is simply dummy text of the printing and typesetting
									industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer.Lorem Ipsum is simply dummy text of the printing and typesetting
									industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
								</p>
								<v-img :lazy-src="Image2" max-height="390" :src="Image2"></v-img>
								<div class="image--caption">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
								</div>
								<p v-for="(item, i) in 3" :key="i">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer.Lorem Ipsum is simply dummy text of the printing and typesetting
									industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer.Lorem Ipsum is simply dummy text of the printing and typesetting
									industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
								</p>
								<v-img :lazy-src="Image3" max-height="390" :src="Image3"></v-img>
								<div class="image--caption">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
								</div>
								<h3 class="article--subtitle">Remote possibilities for big tech</h3>
								<p v-for="(item, i) in 2" :key="i">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer.Lorem Ipsum is simply dummy text of the printing and typesetting
									industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer.Lorem Ipsum is simply dummy text of the printing and typesetting
									industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
								</p>
							</div>
						</div>
						<div class="card-footer">
							<ul id="social__links" class="float-left">
								<li>
									<span><i class="flaticon-facebook"/></span>
								</li>
								<li>
									<span><i class="flaticon-twitter"/></span>
								</li>
							</ul>
							<ul id="social__links" class="float-right">
								<li>
									<span><i class="flaticon-facebook"/></span>
								</li>
								<li>
									<span><i class="flaticon-twitter"/></span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>
<script>
import BreadCrumbs from '../components/BreadCrumbs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image1 from '../assets/images/article-image1.png';
import Image2 from '../assets/images/article-image2.png';
import Image3 from '../assets/images/article-image3.png';
export default {
	name: 'ResourcesArticle',
	components: {
		BreadCrumbs,
		Navbar,
		Footer,
	},
	data() {
		return {
			Image1,
			Image2,
			Image3,
		};
	},
};
</script>
<style scoped>
.article--sidebar {
	border-top: 1px solid #dfe4ed;
	border-bottom: 1px solid #dfe4ed;
	padding: 20px 0;
}
.article--date {
	font-size: 12px;
	color: #292219;
}
.article--author {
	font-size: 16px;
	color: #292219;
	margin-bottom: 0;
	font-weight: 700;
}
.article--author span {
	display: block;
	font-style: italic;
}
.card {
	border-radius: 10px;
}
.card-body {
	padding: 2.25rem;
}
.card-footer {
	background: #fff;
	padding: 1.75rem 2.25rem;
}
ul {
	margin-bottom: 0;
}
ul li {
	display: inline;
	list-style-type: none;
	text-transform: uppercase;
}
#social__links li {
	padding: 0 0.5em;
	font-size: 13px;
}

#social__links li i {
	font-size: 1em;
}
.flaticon-facebook,
.flaticon-twitter,
.flaticon-vimeo,
.flaticon-youtube {
	color: #00b1bc;
}
.download--button {
	height: 75px;
	width: 75px;
	background: #fff;
	border-radius: 50%;
	position: absolute;
	top: 50px;
	right: -35px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}
.article--title {
	font-size: 24px;
	font-weight: 700;
}
.article--subtitle {
	font-size: 20px;
	font-weight: 700;
	padding: 1.2em 0;
}
.image--caption {
	color: #94908c;
	font-size: 12px;
	font-weight: 400;
	margin-bottom: 1em;
}
</style>
