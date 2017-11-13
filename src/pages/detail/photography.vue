<template>
	<section>
		<HeaderComp class="photo">
			<img slot="header-title" src="../../assets/img/photo/banner_title.png" class="p-show">
			<img slot="header-title" src="../../assets/img/photo/m_banner_title.png" class="m-show">
			<img slot="scroll-button" src="../../assets/img/arrow_down.png">
		</HeaderComp>
		<main>
			<div class="map">
				<img src="../../assets/img/yue_map.jpg" class="responsive-img p-show">
				<img src="../../assets/img/m_map.png" class="responsive-img m-show">
			</div>
			<div class="advantage">
				<div class="container">
					<img src="../../assets/img/photo/advantage.png" class="p-show">
					<img src="../../assets/img/photo/m_advantage.png" class="m-show">
				</div>
			</div>
			<div class="flex-row film">
				<div class="flex-col">
					<img src="../../assets/img/photo/banner2.jpg" class="p-show">
					<img src="../../assets/img/photo/m_banner2.png" class="m-show">
				</div>
				<div class="flex-col micro-film p-show">
					<div class="flex-row-vertical mv-wrap">
						<div class="flex-col mv-header">
							<img src="../../assets/img/photo/mv_title.png" class="responsive-img">
						</div>
						<div class="flex-col mv-body">
							<video id="yueVideo" class="mv" poster="http://img14.360buyimg.com/shaidan/s645x515_jfs/t11830/122/255851217/99035/296021db/59eb164eN4722184d.jpg" src="http://1254456297.vod2.myqcloud.com/2f3b5ff4vodtransgzp1254456297/3388b0459031868223334457147/v.f40.mp4" controls @play="handlePlayed"></video>
						</div>
						<div class="flex-col mv-footer">
							<img src="../../assets/img/photo/logo.png" class="logo">
							<img src="../../assets/img/photo/mv_footer.png" class="responsive-img">
						</div>	
					</div>
				</div>
			</div>
			<div class="flex-row-vertical mv-wrap m-show">
				<div class="flex-col mv-header">
					<img src="../../assets/img/photo/mv_title.png" class="responsive-img">
				</div>
				<div class="flex-col mv-body">
					<video id="yueVideo" class="mv" poster="http://img14.360buyimg.com/shaidan/s645x515_jfs/t11830/122/255851217/99035/296021db/59eb164eN4722184d.jpg" src="http://1254456297.vod2.myqcloud.com/2f3b5ff4vodtransgzp1254456297/3388b0459031868223334457147/v.f40.mp4" controls @play="handlePlayed"></video>
				</div>
				<div class="flex-col mv-footer">
					<!-- <img src="../../assets/img/photo/logo.png" class="logo"> -->
					<img src="../../assets/img/photo/mv_footer.png" class="responsive-img">
				</div>	
			</div>
			<div class="photo-show">
				<div class="p-show">
					<router-link to="native">
						<img src="../../assets/img/photo/native.jpg" class="responsive-img">
					</router-link>
					<router-link to="oversea">
						<img src="../../assets/img/photo/oversea.jpg" class="responsive-img">
					</router-link>
				</div>
				<div class="m-show">
					<div class="show-title">
						<img src="../../assets/img/photo/m_show_title.png" class="responsive-img">
					</div>
					<div class="show-native">
						<router-link to="native">
							<img src="../../assets/img/photo/m_native_show.jpg" class="responsive-img">
						</router-link>
					</div>
					<div class="show-oversea">
						<router-link to="oversea">
							<img src="../../assets/img/photo/m_oversea_show.jpg" class="responsive-img">
						</router-link>
					</div>
				</div>
			</div>
			<div class="footer"> 
				<img src="../../assets/img/photo/banner3.jpg" class="responsive-img p-show">
				<img src="../../assets/img/photo/m_banner3.png" class="responsive-img m-show">
			</div>
		</main>
	</section>
</template>
<script>
	import HeaderComp from '@/components/Header'
	export default {
		components: {
			HeaderComp,
		},
		methods: {
			handlePlayed() {
				this.isPlayed = true;
				let yueVideo = document.getElementById('yueVideo');
				if(yueVideo && yueVideo.readyState) {
					yueVideo.play()
				} else {
					this.$message('该视频暂无法播放')
				}
			},
		}, 
		mounted() {
			window.scrollTo(0, 0);
		}
	}
</script>
<style scoped lang="scss">
	.full-header {
		&.photo {
			background: url(../../assets/img/photo/m_banner.jpg) no-repeat center;
  		background-size: cover;
  		@media (min-width: 768px) {
		  	background: url(../../assets/img/photo/banner.jpg) no-repeat center;
		  	background-size: cover;
			}
		}
	}
	.advantage {
		width: 100%;
		padding: 20px;
		background: #fff;
		@media(min-width: 768px) {
			padding: 100px 10%;
		}
	}
	.mv-wrap {
    background: #F5F4EF;
    @media(min-width: 768px) {
			padding: 30px;
		}
    &.p-show {
    	display: none;
    	@media (min-width: 768px) {
    		display: block;
    	}
    }
    &.m-show {
    	display: block;
    	@media (min-width: 768px) {
    		display: none;
    	}
    }
		.mv-header {
			padding: 30px 30% 15px;
			@media (min-width: 768px) {
				padding: 15px 27%;
			}
		}
		.mv-body {
	  	width: 100%;
	  	.mv {
	  		width: 100%;
	  	}
	  }
		.mv-footer {
			padding: 20px 15%;
			text-align: center;
			@media (min-width: 768px) {
				padding: 15px 15%;
			}
			.logo {
				width: 25px;
				height: 25px;
				margin-bottom: 15px;
			}
		}
	}
  .photo-show {
  	width: 100%;
  	padding: 30px;
  	background: #fff;
  	@media(min-width: 768px) {
			padding: 0;
		}
  	.show-title {
  		width: 75%;
  		margin: 0 auto 30px;
  		@media(min-width: 768px) {
				width: 60%;
				margin: 30px auto;
			}
  	}
  	.show-native {
			margin: 30px auto;
			@media(min-width: 768px) {
				margin: 60px auto;
			}
  	}
  }
</style>
