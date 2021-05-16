<template>
	<div class="footer">
		<div class="footer__links container">
			<div>
				<ul id="footer">
					<li>Home</li>
					<li>Programs</li>
					<li>Blueprint</li>
					<li>Resources</li>
				</ul>
			</div>

			<div>
				<ul id="footer">
					<li>
						<span><i class="flaticon-facebook"/></span>
					</li>
					<li>
						<span><i class="flaticon-twitter"/></span>
					</li>
					<li>
						<span><i class="flaticon-vimeo"/></span>
					</li>
					<li>
						<span><i class="flaticon-youtube"/></span>
					</li>
				</ul>
			</div>
		</div>
		<div class="footer__links__secondary container">
			<div>
				© 2021 Built in Africa with Love by Qhala. All rights reserved.
			</div>

			<div>
				<ul id="footer__secondary">
					<li>Terms of Service</li>
					<li>Privacy</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Footer',
};
</script>
<style scoped>
.footer {
	min-height: 200px;
	background: #fff;
}
.footer__links {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2.6em 0;
	border-bottom: 1px solid #00b1bc;
}
.footer__links__secondary {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2em 0;
	font-size: 11px;
}
ul {
	margin-bottom: 0;
}
ul li {
	display: inline;
	list-style-type: none;
	text-transform: uppercase;
}
#footer li {
	padding: 0 1em;
	font-size: 13px;
}

#footer__secondary li {
	padding: 0 1em;
}
#footer li i {
	font-size: 1.2em;
}
.flaticon-facebook,
.flaticon-twitter,
.flaticon-vimeo,
.flaticon-youtube {
	color: #00b1bc;
}
</style>
