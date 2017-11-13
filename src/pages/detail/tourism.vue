<template>
	<section>
		<HeaderComp class="tourism">
			<img slot="header-title" src="../../assets/img/tourism/banner_title.png" class="m-show">
			<img slot="scroll-button" src="../../assets/img/arrow_down_yue.png">
		</HeaderComp>
		<div class="main">
			<div class="reason-section">
				<div class="main-title">
					<img src="../../assets/img/tourism/banner2_title.png" alt="">
				</div>
				<div class="container p-show">
					<img src="../../assets/img/tourism/tourism_pic1.jpg" class="responsive-img">
					<img src="../../assets/img/tourism/tourism_pic2.jpg" class="responsive-img">
					<img src="../../assets/img/tourism/tourism_pic3.jpg" class="responsive-img">
					<img src="../../assets/img/tourism/tourism_pic4.jpg" class="responsive-img">
					<img src="../../assets/img/tourism/tourism_pic5.jpg" class="responsive-img">
					<img src="../../assets/img/tourism/tourism_pic6.jpg" class="responsive-img">
					<img src="../../assets/img/tourism/tourism_pic7.jpg" class="responsive-img">
					<img src="../../assets/img/tourism/tourism_pic8.jpg" class="responsive-img">
				</div>
				<div class="m-show">
					<img src="../../assets/img/tourism/m_banner1.jpg" class="responsive-img">
					<img src="../../assets/img/tourism/m_banner2.jpg" class="responsive-img">
					<img src="../../assets/img/tourism/m_banner3.jpg" class="responsive-img">
					<img src="../../assets/img/tourism/m_banner4.jpg" class="responsive-img">
					<img src="../../assets/img/tourism/m_banner5.jpg" class="responsive-img">
					<img src="../../assets/img/tourism/m_banner6.jpg" class="responsive-img">
					<img src="../../assets/img/tourism/m_banner7.jpg" class="responsive-img">
					<img src="../../assets/img/tourism/m_banner8.jpg" class="responsive-img">
				</div>
			</div>
			<div>
				<img src="../../assets/img/tourism/yue_banner.jpg" class="responsive-img p-show">
				<img src="../../assets/img/tourism/m_banner9.png" class="responsive-img m-show">
			</div>
			<div class="vision">
				<div class="container">
					<img src="../../assets/img/tourism/vision.jpg" class="responsive-img p-show">
					<img src="../../assets/img/tourism/yue_vision.jpg" class="responsive-img m-show">
				</div>
			</div>
			<div>
				<img src="../../assets/img/yue_map.jpg" class="responsive-img p-show">
				<img src="../../assets/img/m_map.png" class="responsive-img m-show">
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
		.reason-section {
			width: 100%;
			padding: 30px 0;
			@media (min-width: 768px) {
				padding: 60px 10%;
			}
			.main-title {
				padding: 0 60px 20px;
				text-align: center;
				@media (min-width: 768px) {
			  	padding: 0 10% 30px;
				}
			}
		}
		.vision {
			background: #fff;
			@media (min-width: 768px) {
				padding: 80px 10%;
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