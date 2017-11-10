<template>
	<section>
		<HeaderComp class="tourism">
			<img slot="header-title" src="../../assets/img/tourism/banner_title.png" class="m-show">
			<img slot="scroll-button" src="../../assets/img/arrow_down_yue.png">
		</HeaderComp>
		<div class="main">
			<div class="container">
				<div class="main-title">
					<img src="../../assets/img/tourism/tourism_title.png" alt="">
				</div>
				<div class="text-center">
					<img src="../../assets/img/tourism/tourism_pic1.jpg" alt="">
					<img src="../../assets/img/tourism/tourism_pic2.jpg" alt="">
					<img src="../../assets/img/tourism/tourism_pic3.jpg" alt="">
					<img src="../../assets/img/tourism/tourism_pic4.jpg" alt="">
					<img src="../../assets/img/tourism/tourism_pic5.jpg" alt="">
					<img src="../../assets/img/tourism/tourism_pic6.jpg" alt="">
					<img src="../../assets/img/tourism/tourism_pic7.jpg" alt="">
					<img src="../../assets/img/tourism/tourism_pic8.jpg" alt="">
				</div>
			</div>
			<div class="banner">
				<img src="../../assets/img/tourism/yue_banner.jpg" class="responsive-img">
			</div>
			<div class="banner view">
				<img src="../../assets/img/tourism/view.jpg" class="responsive-img">
			</div>
			<div class="banner">
				<img src="../../assets/img/yue_map.jpg" class="responsive-img">
			</div>
		</div>
	</section>
</template>
<script>
	import HeaderComp from '@/components/Header'
	export default {
		components: {
			HeaderComp,
		},
		mounted() {
			window.scrollTo(0, 0);
		}
	}
</script>
<style scoped lang="scss">
	.tourism {
		&.full-header {
			background: url(../../assets/img/tourism/m_banner.jpg) no-repeat center;
  		background-size: cover;
  		@media (min-width: 768px) {
		  	background: url(../../assets/img/tourism/banner.jpg) no-repeat center;
		  	background-size: cover;
			}
		}
	}
	.main {
		background: #fff;
		@media (min-width: 768px) {
	  	background: #F5F4EF;
		}
		.main-title {
			padding: 30px 60px;
			text-align: center;
			background: #fff;
			@media (min-width: 768px) {
		  	padding: 30px 10%;
		  	background: #F5F4EF;
			}
		}
		.banner {
			margin-top: 10px;
			@media (min-width: 768px) {
		  	margin-top: 30px;
			}
			&.view {
				padding: 20px 0;
				margin: 20px 10px;
				@media (min-width: 768px) {
			  	margin: 0;
			  	background: #fff;
				}
			}
		}
		.row {
			display: flex;
			width: 100%;
			&:nth-of-type(even) {
				.col:first-child {
					width: calc(50% + 5px);
				}
				.col:last-child {
					width: calc(50% - 5px);
				}
			}
			&:nth-of-type(odd) {
				.col:first-child {
					width: calc(50% - 5px);
				}
				.col:last-child {
					width: calc(50% + 5px);
				}
			}
			.col {
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>