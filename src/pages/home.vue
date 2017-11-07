<template>
	<section>
		<header class="full-header">
			<div class="header-title">
				<img src="../assets/img/header_logo.png">
			</div>
			<div class="header-button" @click="scrollDown">
				<img src="../assets/img/arrow_down_yue.png">
			</div>
		</header>
		<main>
			<div class="flex-row scale">
				<div class="flex-col">
					<img src="../assets/img/home/banner1.png">
				</div>
			</div>
			<div class="flex-row scale">
				<div class="flex-col">
					<img src="../assets/img/home/banner2.png">
				</div>
				<div class="flex-col">
					<img src="../assets/img/home/banner3.png">
				</div>
			</div>
			<div class="flex-row scale">
				<div class="flex-col">
					<img src="../assets/img/home/banner4.png">
				</div>
				<div class="flex-col">
					<img src="../assets/img/home/banner5.png">
				</div>
				<div class="flex-col">
					<img src="../assets/img/home/banner6.png">
				</div>
			</div>
			<!-- <div class="flex">
				<div class="flex-item about">
					<img src="../assets/img/home/about_bg.png">
					<div class="item-content">
						<div class="item-title">
							<img src="../assets/img/home/home_about.png">
						</div>
						<router-link to="/detail/about" class="item-link">
							<img src="../assets/img/home/about_us.png" >
						</router-link>
					</div>
				</div>
			</div>
			<div class="flex">
				<div class="flex-item photo">
					<img src="../assets/img/home/home_photo_bg.png">
					<div class="item-content">
						<div class="item-title">
							<img src="../assets/img/home/home_photo.png">
						</div>
						<router-link to="/detail/photography" class="item-link">
							<img src="../assets/img/home/show_button.png">
						</router-link>
					</div>
				</div> 
				<div class="flex-item tourism">
					<img src="../assets/img/home/home_tourism_bg.png">
					<div class="item-content">
						<div class="item-title">
							<img src="../assets/img/home/home_tourism_title.png">
						</div>
						<router-link to="/detail/tourism" class="item-link">
							<img src="../assets/img/home/show_button.png">
						</router-link>
					</div>
				</div>
				<div class="flex-item marketing">
					<img src="../assets/img/home/home_marketing_bg.png">
					<div class="item-content">
						<div class="item-title">
							<img src="../assets/img/home/home_marketing.png">
						</div>
						<router-link to="/detail/marketing" class="item-link">
							<img src="../assets/img/home/show_button.png">
						</router-link>
					</div>
				</div>
			</div>
			<div class="flex">
				<div class="flex-item finance">
					<img src="../assets/img/home/home_finance_bg.png">
					<div class="item-content">
						<div class="item-title">
							<img src="../assets/img/home/home_finance_title.png">
						</div>
						<router-link to="/detail/finance" class="item-link">
							<img src="../assets/img/home/show_button.png">
						</router-link>
					</div>
				</div>
				<div class="flex-item system">
					<img src="../assets/img/home/home_system_bg.png">
					<div class="item-content">
						<div class="item-title">
							<img src="../assets/img/home/home_system.png">
						</div>
						<router-link to="/detail/system" class="item-link">
							<img src="../assets/img/home/show_button2.png">
						</router-link>
					</div>
				</div>
				<div class="flex-item join">
					<img src="../assets/img/home/home_join_bg.png">
					<div class="item-content">
						<div class="item-title join">
							<img src="../assets/img/home/home_join_title.png">
						</div>
						<router-link to="/detail/join" class="item-link">
							<img src="../assets/img/home/show_button.png">
						</router-link>
					</div>
				</div>
			</div> -->
			<div class="flex-row">
				<div class="flex-col film">
					<video poster="http://img14.360buyimg.com/shaidan/s645x515_jfs/t11830/122/255851217/99035/296021db/59eb164eN4722184d.jpg" controls id="yueVideo" class="yue-video" @play="handlePlay" @pause="handlePause">
						<source src="http://1254456297.vod2.myqcloud.com/2f3b5ff4vodtransgzp1254456297/fb24bb029031868223371331575/v.f30.mp4" type="video/mp4">
					</video>
					<div class="item-content" @click="handlePaused">
						<img v-show="!isPlayed" src="../assets/img/home/play_button.png" class="play-button" @click.stop="handlePlayed">
					</div>
				</div>
				<div class="flex-col join">
					<img src="../assets/img/home/banner7.png">
				</div>
			</div>
			<!-- <div class="flex-row">
				<div class="flex-col">
					<img src="../assets/img/home/banner7.png">
				</div>
			</div> -->
			<div class="flex-row">
				<div class="flex-col intro">
					<img src="../assets/img/home/home_intro.jpg">
				</div>
			</div>
		</main>
		<footer class="footer">
			<span class="footer-logo"></span>
		</footer>
	</section>
</template>
<script>
	export default {
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
		}
	}
</script>
<style scoped lang="scss">
	.full-header {
	  position: relative;
	  height: 100vh;
	  overflow: hidden;
	  background: url(../assets/img/header_banner1.jpg) no-repeat center;
	  background-size: cover;
	  @media (min-width: 768px) {
			background: url(../assets/img/header_bg.jpg) no-repeat center;
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
			> img {
	      display: block;
	      width: 100%;
	      height: 100%;
	    }
		}
		&.scale {
			.flex-col {
				cursor: pointer;
				overflow: hidden;
				> img {
					transition: all .5s;
					&:hover {
						transform: scale(1.08);
					}
				}
			}
		}
	}
	.item-content {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.item-title {
			width: 25%;
			text-align: center;
		}
		.item-link {
			display: block;
			width: 16%;
			margin-top: 0;
			text-align: center;
			@media (min-width: 768px) {
				margin-top: 1.5rem;
			}
		}
	}
	.about {
		.item-content {
			.item-title {
				margin-top: -8%;
			}
			.item-link {
				margin-top: 0.3rem;
				@media (min-width: 768px) {
					margin-top: 2rem;
				}
			}
		}
	}
	.film {
		position: relative;
		.item-content {
			height: 80%;
			// cursor: pointer;
			.play-button {
				margin-top: 5%;
				@media (max-width: 768px) {
					width: 64px;
				}
			}
		}
		.yue-video {
			width: 100%;
			height: 100%;
		}
		.play-button {
			cursor: pointer;
		}
	}
	.join {
		display: none;
		@media (min-width: 768px) {
			display: block;
		}
	}
	.footer {
		padding: 1rem;
		text-align: center;
		background: #fff;
		.footer-logo {
			display: inline-block;
			width: 25px;
			height: 25px;
			background: url(../assets/img/footer/yue_icon.png) no-repeat center;
			background-size: cover;
			@media (min-width: 768px) {
				width: 30px;
				height: 30px;
			}
		}
	}
</style>