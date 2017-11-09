<template>
	<section>
		<div class="login-bg">
			<div class="login-box">
				<div class="login-top">
					<img src="../../assets/img/login/logo.png" alt="">
				</div>
				<div class="login-content">
					<h3><img src="../../assets/img/login/success.jpg" alt="">恭喜您，注册成功！</h3>
					<p>请稍后，工作人员马上与您联系</p>
					<p>我们将确认身份后给予登录账号</p>
					<!-- <p>{{count}}秒后自动跳转登录页.......</p> -->
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	export default {
		data () {
			return {
				count: 5,
			}
		},
		methods: {
			countDown() {
				let timer = null;
				timer = setInterval(() => {
					if(this.count > 0) {
						this.count --;
					} else {
						clearInterval(timer)
						this.$router.push('/login')
					}
				}, 1000)	
			},
		},
		mounted () {
			// this.countDown()
		}
	}
</script>
<style scoped lang="scss">
	.login-bg {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		padding: 30px;
		background: url(../../assets/img/login/register_success_bg.jpg) no-repeat center;
		background-size: cover;
		.login-box {
			width: 100%;
			text-align: center;
			@media (min-width: 768px) {
				width: 400px;
			}
			.login-top {
				width: 60%;
				margin: auto;
				@media (min-width: 768px) {
				  width: 80%;
				}
			}
			.login-content {
				height: 400px;
				margin: 30px 0;
				padding: 30px;
				color: #009bde;
				background: rgba(255,255,255,1);
				h3 {
					font-size: 22px;
					margin: 30px 0;
					img {
						margin-right: 5px;
					}
				}
				p {
					font-size: 18px;
					&:last-child {
						margin: 30px;
					}
				}
			}
		}
	}
</style>