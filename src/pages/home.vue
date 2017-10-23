<template>
	<section>
		<header class="full-header">
			<div class="header-title">
				<img src="../assets/img/header_logo.png" alt="">
			</div>
			<div class="header-button" @click="scrollDown">
				<img src="../assets/img/arrow_down_yue.png" alt="">
			</div>
		</header>
		<main>
			<div class="flex">
				<div class="flex-item about">
					<img src="../assets/img/home/about_bg.png" alt="">
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
					<img src="../assets/img/home/home_marketing_bg.png" alt="">
					<div class="item-content">
						<div class="item-title">
							<img src="../assets/img/home/home_marketing.png" alt="">
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
							<img src="../assets/img/home/home_finance_title.png" alt="">
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
							<img src="../assets/img/home/home_system.png" alt="">
						</div>
						<router-link to="/detail/system" class="item-link">
							<img src="../assets/img/home/show_button2.png">
						</router-link>
					</div>
				</div>
				<div class="flex-item join">
					<img src="../assets/img/home/home_join_bg.png" alt="">
					<div class="item-content">
						<div class="item-title join">
							<img src="../assets/img/home/home_join_title.png">
						</div>
						<router-link to="/detail/join" class="item-link">
							<img src="../assets/img/home/show_button.png">
						</router-link>
					</div>
				</div>
			</div>
			<div class="flex">
				<div class="flex-item film">
					<video poster="http://img14.360buyimg.com/shaidan/s645x515_jfs/t11830/122/255851217/99035/296021db/59eb164eN4722184d.jpg" controls id="yueVideo" @play="handlePlay" @pause="handlePause">
						<source src="http://1254456297.vod2.myqcloud.com/2f3b5ff4vodtransgzp1254456297/fb24bb029031868223371331575/v.f30.mp4" type="video/mp4">
					</video>
					<div class="item-content">
						<img v-show="!isPlayed" src="../assets/img/home/start_button.png" class="play-button" @click.stop="handlePlayed">
					</div>
				</div>
			</div>
			<div class="flex">
				<div class="flex-item intro">
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
	    	yueVideo && yueVideo.play()
	    	return false;
			},
			handlePause() {
				this.isPlayed = false;
				// document.getElementById('yueVideo').pause()
			},
			handlePlay() {
				this.isPlayed = true;
			}
		}
	}
</script>
<style scoped lang="scss">
	.full-header {
	  position: relative;
	  height: 100vh;
	  background: url(../assets/img/header_banner.jpg) no-repeat center;
	  background-size: cover;
	  overflow: hidden;
	  .header-title {
	  	width: 90%;
	  	margin: 10% auto;
	  }
	  .header-button {
	    position: absolute;
	    left: 50%;
	    bottom: 5%;
	    width: 30px;
	    margin-left: -15px;
	    animation: flicker .4s ease-in-out infinite alternate;
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
	.flex-item {
		> img {
			width: 100%;
			height: 100%
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
		// background: url(../assets/img/home/home_video_bg.jpg) no-repeat center;
		// background-size: cover;
		.item-title {
			width: 25%;
		}
		.item-link {
			display: block;
			width: 16%;
		}
	}
	.film {
		.item-content {
			height: 80%
		}
		video {
			width: 100%;
			height: 100%;
		}
		.play-button {
			cursor: pointer;
		}
	}
	.footer {
		padding: 1rem;
		text-align: center;
		background: #fff;
		.footer-logo {
			display: inline-block;
			width: 30px;
			height: 30px;
			background: url(../assets/img/footer/yue_icon.png) no-repeat center;
			background-size: cover;
		}
	}
</style>