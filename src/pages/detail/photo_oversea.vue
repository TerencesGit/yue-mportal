<template>
	<section>
		<header class="header">
			<img src="../../assets/img/photo/oversea/oversea_head.jpg" class="responsive-img">
		</header>
		<div class="main">
			<div class="main-center">
				<div class="main-title">
					<img src="../../assets/img/photo/oversea/oversea_title.png" alt="">
				</div>
				<div>
					<img src="../../assets/img/photo/oversea/oversea_show1.jpg" alt="">
				</div>
				<div>
					<img src="../../assets/img/photo/oversea/oversea_show2.jpg" alt="">
				</div>
				<div>
					<img src="../../assets/img/photo/oversea/oversea_show3.jpg" alt="">
				</div>
				<div>
					<img src="../../assets/img/photo/oversea/oversea_show4.jpg" alt="">
				</div>
				<div>
					<img src="../../assets/img/photo/oversea/oversea_show5.jpg" alt="">
				</div>
				<div>
					<img src="../../assets/img/photo/oversea/oversea_show6.jpg" alt="">
				</div>
				<div>
					<img src="../../assets/img/photo/oversea/oversea_show7.jpg" alt="">
				</div>
				<div>
					<img src="../../assets/img/photo/oversea/oversea_show8.jpg" alt="">
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	export default {
		mounted () {
			window.scrollTo(0, 0);
		}
	}
</script>
<style scoped lang="scss">
	.header {
		@media (min-width: 768px) {
			height: 75vh;
		}
		@media (min-width: 1200px) {
			height: 90vh;
		}
	}
	.main {
		background: url(../../assets/img/photo/wave_bg.jpg) repeat center fixed;
		.main-center {
			width: 100%;
			position: relative;
			z-index: 1;
			text-align: center;
			background: #F5F4EF;
			@media (min-width: 768px) {
				width: 80%;
				margin: 0 auto;
				padding: 15px 15px 0;
			}
			> div {
				margin: 8px 0;
				&:last-child {
					margin-bottom: 0;
				}
				&:not(.main-title) {
					img {
						width: 100%;
					}
				}
			}
			.main-title {
				margin: 0;
				padding: 10px 0;
				@media (min-width: 768px) {
					padding: 30px 0;
				}
				img {
					width: 80%;
					margin: 0 auto;
				}
			}
		}
	}
</style>