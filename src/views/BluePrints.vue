<template>
	<div class="bg">
		<Navbar />
		<Banner />
		<div class="container">
			<div class="card">
				<div class="card-body blueprint--body">
					<h3 class="blueprint--title">The BluePrint</h3>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry's standard dummy text ever since the 1500s, when an unknown printer.Lorem Ipsum is
						simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of
						the printing and typesetting industry.
					</p>
					<section class="blue--print">
						<header>
							<div class="circle--label">5</div>
							<div class="header--text">Monitoring & Evaluation</div>
						</header>
						<nav>
							<div class="circle--label">1</div>
							<div class="nav--text">Private Public Partnership</div>
						</nav>
						<main>
							<div class="card main--card">
								<div class="card-body">
									<div class="circle--label">4</div>
									<div class="main--text">Offtaker market</div>
								</div>
							</div>
							<div class="card main--card">
								<div class="card-body">
									<div class="circle--label">3</div>
									<div class="main--text">Institutionalization</div>
								</div>
							</div>
							<div class="card main--card">
								<div class="card-body">
									<div class="circle--label">2</div>
									<div class="main--text">Skills</div>
								</div>
							</div>
						</main>
						<section>
							<div class="card section--card">
								<div class="card-body">Goals and expertise</div>
							</div>
							<div class="card section--card">
								<div class="card-body">Business Models</div>
							</div>
							<div class="card section--card">
								<div class="card-body">Workforce/Market Driven</div>
							</div>
						</section>
						<footer>
							<div class="circle--label">0</div>
							<div class="header--text">Policy - Nationwide Enabling Environment, Policy Framework</div>
						</footer>
					</section>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>
<script>
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
export default {
	name: 'BluePrints',
	components: {
		Banner,
		Footer,
		Navbar,
	},
};
</script>
<style scoped>
.blueprint--title {
	color: #000;
	font-weight: 700;
	font-size: 18px;
}
.blue--print {
	display: grid;
	grid-template-areas:
		'header header header'
		'nav  main sidebar'
		'footer footer footer';
	grid-template-rows: 80px 1fr 80px;
	grid-template-columns: 150px 1fr 150px;
	gap: 2em 2em;
}
.blueprint--body {
	padding: 3rem 6rem;
}
.blue--print > header {
	grid-area: header;
	background-color: #00b1bc;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.blue--print > nav {
	grid-area: nav;
	background-color: #00b1bc;
	border-radius: 5px;
	min-height: 390px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
}
.blue--print > section {
	grid-area: sidebar;
	background-color: #00b1bc;
	border-radius: 5px;
	min-height: 390px;
	display: flex;
	align-items: stretch;
	justify-content: space-around;
	flex-direction: column;
	text-align: center;
}

.blue--print > main {
	grid-area: main;
	background-color: #fff;
	display: flex;
	align-items: stretch;
	justify-content: space-between;
	flex-direction: column;
	text-align: center;
}

.blue--print > footer {
	grid-area: footer;
	background-color: #00b1bc;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.circle--label {
	height: 50px;
	width: 50px;
	background: #fff;
	color: #000;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 25px;
	font-weight: bold;
}
.header--text,
.main--text {
	color: #fff;
	padding: 0 2em;
	font-size: 17px;
	font-weight: 700;
}

.nav--text {
	color: #fff;
	padding: 2em 0;
	font-size: 17px;
	font-weight: 700;
}
.section--card {
	margin: 1em;
	border-radius: 10px;
	font-weight: 700;
}
.main--card {
	background-color: #00b1bc;
}
.main--card .card-body {
	display: flex;
	align-items: center;
}
</style>
