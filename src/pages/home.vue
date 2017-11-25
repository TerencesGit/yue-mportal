<template>
	<section>
		<HeaderComp></HeaderComp>
		<main>
			<div class="flex-row">
				<div class="flex-col p-show scale">
					<img src="../assets/img/home/banner1.png">
					<router-link to="/detail/about" target="_blank">
						<img src="../assets/img/home/banner_link1.png" class="banner-link about">
					</router-link>
				</div>
				<router-link to="/detail/about" class="flex-col m-show">
					<img src="../assets/img/home/m_banner1.png">
				</router-link>
			</div>
			<div class="flex-row">
				<div class="flex-col p-show scale">
					<img src="../assets/img/home/banner2.png">
					<router-link to="/detail/photography" target="_blank">
						<img src="../assets/img/home/banner_link2.png" class="banner-link photo">
					</router-link>
				</div>
				<div class="flex-col p-show scale">
					<img src="../assets/img/home/banner3.png">
					<router-link to="/detail/tourism" target="_blank">
						<img src="../assets/img/home/banner_link3.png" class="banner-link tourism">
					</router-link>
				</div> 
				<router-link to="/detail/photography" class="flex-col m-show">
					<img src="../assets/img/home/m_banner2.png">
				</router-link>
				<router-link to="/detail/tourism" class="flex-col m-show">
					<img src="../assets/img/home/m_banner3.png">
				</router-link>
				<router-link to="/detail/finance" class="flex-col m-show">
					<img src="../assets/img/home/m_banner4.png">
				</router-link>
			</div>
			<div class="flex-row">
				<div class="flex-col p-show scale">
					<img src="../assets/img/home/banner4.png">
					<router-link to="/detail/finance" target="_blank">
						<img src="../assets/img/home/banner_link4.png" class="banner-link">
					</router-link>
				</div>
				<div class="flex-col p-show scale">
					<img src="../assets/img/home/banner5.png">
					<router-link to="/detail/system" target="_blank">
						<img src="../assets/img/home/banner_link5.png" class="banner-link">
					</router-link>
				</div>
				<div class="flex-col p-show scale">
					<img src="../assets/img/home/banner6.png">
					<router-link to="/detail/marketing" target="_blank">
						<img src="../assets/img/home/banner_link6.png" class="banner-link">
					</router-link>
				</div>
				<router-link to="/detail/system" class="flex-col m-show">
					<img src="../assets/img/home/m_banner5.png">
				</router-link>
				<router-link to="/detail/marketing" class="flex-col m-show">
					<img src="../assets/img/home/m_banner6.png">
				</router-link>
				<router-link to="/detail/join" class="flex-col m-show">
					<img src="../assets/img/home/m_banner7.png">
				</router-link>
			</div>
			<div class="flex-row">
				<div class="flex-col film">
					<video poster="http://img14.360buyimg.com/shaidan/s645x515_jfs/t11830/122/255851217/99035/296021db/59eb164eN4722184d.jpg" controls id="yueVideo" class="yue-video" @play="handlePlay" @pause="handlePause">
						<source src="http://1254456297.vod2.myqcloud.com/2f3b5ff4vodtransgzp1254456297/3388b0459031868223334457147/v.f40.mp4" type="video/mp4">
					</video>
					<!-- <video poster="http://img13.360buyimg.com/shaidan/s645x515_jfs/t11215/123/2077501155/73511/d0f924f1/5a0ff531Ne3168711.jpg" controls id="yueVideo" class="yue-video m-show" @play="handlePlay" @pause="handlePause">
						<source src="http://1254456297.vod2.myqcloud.com/2f3b5ff4vodtransgzp1254456297/3388b0459031868223334457147/v.f40.mp4" type="video/mp4">
					</video> -->
					<div class="film-view" @click="handlePaused">
						<img v-show="!isPlayed" src="../assets/img/home/play_button.png" class="play-button p-show" @click.stop="handlePlayed">
					</div>
				</div>
				<div class="flex-col p-show scale">
					<img src="../assets/img/home/banner7.png">
					<router-link to="/detail/join" target="_blank">
						<img src="../assets/img/home/banner_link7.png" class="banner-link join">
					</router-link>
				</div>
			</div>
			<div class="flex-row">
				<div class="flex-col intro">
					<img src="../assets/img/home/banner8.jpg">
					<!-- <img src="../assets/img/home/m_banner8.png" class="m-show"> -->
				</div>
			</div>
		</main>
		<footer class="footer">
			<span class="footer-logo"></span>
		</footer>
	</section>
</template>
<script>
	import { getMyInfo } from '@/api'
	import HeaderComp from '@/components/Header'
	import FooterComp from '@/components/Footer'
	export default {
		components: {
			HeaderComp,
			FooterComp,
		},
		data () {
			return {
				isPlayed: false,
			}
		},
		methods: {
			scrollDown() {
				let scrollHeight = document.getElementsByClassName('full-header')[0].offsetHeight;
				let currentPosition = 0;
				let timer = null;
	      let gotoTop = () => {
	        currentPosition += 25;
	        if (currentPosition < scrollHeight) {
	          window.scrollTo(0, currentPosition);
	        } else {
	          window.scrollTo(0, scrollHeight);
	          clearInterval(timer);
	          timer = null;
	        }
	      }
	      timer = setInterval(gotoTop, 1)
			},
			getUserInfo() {
	      getMyInfo().then(res => {
	      	console.log(res)
	        if(res.data.code === '0001') {
	        } else {
	          // this.$message.error(res.data.message)
	        }
	      }).catch(err => {
	        console.log(err)
	        this.$catchError(err)
	      })
	    },
			handlePlayed() {
				this.isPlayed = true;
				let yueVideo = document.getElementById('yueVideo');
				if(yueVideo && yueVideo.readyState) {
					yueVideo.play()
				} else {
					this.$toast('该视频暂无法播放')
				}
			},
			handlePaused() {
				document.getElementById('yueVideo').pause();
			},
			handlePause() {
				this.isPlayed = false;
			},
			handlePlay() {
				this.isPlayed = true;
			},
			handleCanPlay() {

			},
		},
		mounted() {
			window.scrollTo(0, 0)
			this.getUserInfo()
			// if(document.getElementById('iconDiv1')) return;
			// let _53code = document.createElement("script");
		 //  _53code.src = "http://tb.53kf.com/code/code/9006078/1";
		 //  let s = document.getElementsByTagName("script")[0]; 
		 //  s.parentNode.insertBefore(_53code, s);
		}
	}
</script>
<style scoped lang="scss">
	.full-header {
	  position: relative;
	  height: 100vh;
	  overflow: hidden;
	  background: url(../assets/img/header/m_banner.jpg) no-repeat center;
	  background-size: cover;
	  @media (min-width: 769px) {
			background: url(../assets/img/header/banner.jpg) no-repeat center;
	  	background-size: cover;
		} 
	  .header-title {
	  	position: absolute;
	  	top: 72%;
	  	width: 84%;
	  	margin-left: 8%;
	  	text-align: center;
	  	@media (min-width: 768px) {
	  		width: 80%;
	  		margin-left: 10%;
	  		top: 50%;
	  		transform: translateY(-50%);
			} 
	  }
	  .header-button {
	    position: absolute;
	    left: 50%;
	    bottom: 5%;
	    width: 30px;
	    margin-left: -15px;
	    cursor: pointer;
	    animation: flicker .4s ease-in-out infinite alternate;
	    @media (min-width: 768px) {
	    	width: 45px;
	    	margin-left: -22.5px;
	    }
	  }
	}
	@keyframes flicker {
	  0% { 
	    transform: translateY(0px); 
	    opacity: 0.5 
	  }
	  100% { 
	    transform: translateY(10px); 
	    opacity: 1 
	  }
	}
	.flex-row {
		.flex-col {
			position: relative;
			overflow: hidden;
		}
	}
	.banner-link {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 36%;
		transform: translate(-50%, -50%);
		&.about {
			top: 40%;
			width: 14%;
		}
		&.photo {
			top: 45%;
			left: 66%;
			width: 25%;
		}
		&.tourism {
			top: 45%;
			left: 35%;
			width: 25%;
		}
		&.join {
			top: 48%;
			left: 35%;
			width: 26%;
		}
	}
	.film {
		position: relative;
		.film-view {
			position: absolute;
			top: 0;
			width: 100%;
			height: 80%;
			text-align: center;
			.play-button {
				width: 64px;
				margin-top: 20%;
			}
		}
		.yue-video {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		.play-button {
			margin: auto;
			cursor: pointer;
		}
	}
	.footer {
		padding: 10px 0;
		text-align: center;
		background: #fff;
		@media (min-width: 768px) {
			padding: 15px 0;
		}
		.footer-logo {
			display: inline-block;
			width: 25px;
			height: 25px;
			vertical-align: middle;
			background: url(../assets/img/footer/yue_icon.png) no-repeat center;
			background-size: cover;
			@media (min-width: 768px) {
				width: 30px;
				height: 30px;
			}
		}
	}
</style>