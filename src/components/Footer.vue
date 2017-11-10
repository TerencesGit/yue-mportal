<template>
	<footer class="footer">
		<div class="flex-row navbar">
			<router-link to="/detail/photography" class="flex-col">
				<img src="../assets/img/footer/nav1.jpg" class="p-show">
				<img src="../assets/img/footer/m_nav1.png" class="m-show">
			</router-link>
		  <router-link to="/detail/tourism" class="flex-col">
		  	<img src="../assets/img/footer/nav2.jpg" class="p-show">
				<img src="../assets/img/footer/m_nav2.png" class="m-show">
			</router-link>
			<router-link to="/detail/finance" class="flex-col">
				<img src="../assets/img/footer/nav3.jpg" class="p-show">
				<img src="../assets/img/footer/m_nav3.png" class="m-show">
			</router-link>
			<router-link to="/detail/system" class="flex-col">
				<img src="../assets/img/footer/nav4.jpg" class="p-show">
				<img src="../assets/img/footer/m_nav4.png" class="m-show">
			</router-link>
			<router-link to="/detail/marketing" class="flex-col">
				<img src="../assets/img/footer/nav5.jpg" class="p-show">
				<img src="../assets/img/footer/m_nav5.png" class="m-show">
			</router-link>
			<router-link to="/detail/join" class="flex-col">
				<img src="../assets/img/footer/nav6.jpg" class="p-show">
				<img src="../assets/img/footer/m_nav6.png" class="m-show">
			</router-link>
		</div>
		<div class="footer-logo">
			<span @click="backHome"></span>
		</div>
	</footer>
</template>
<script>
	export default {
		methods: {
			linkPhoto () {
				this.$router.push('/detail/photography')
			},
			linkTourism () {
				this.$router.push('/detail/tourism')
			},
			linkFinance () {
				this.$router.push('/detail/finance')
			},
			linkSystem () {
				this.$router.push('/detail/system')
			},
			linkMarketing () {
				this.$router.push('/detail/marketing')
			},
			linkJoin () {
				this.$router.push('/detail/join')
			},
			backHome () {
				this.$router.push('/')
			},
		}
	}
</script>
<style scoped lang="scss">
	.footer {
		padding-top: 15px;
		background: #fff;
		.flex-row {
			@media(min-width: 768px) {
				width: 85%;
				margin: auto;
			}
			.flex-col {
				img {
					width: 100%;
				}
			}
		}
		.footer-logo {
			width: 100%;
			padding: 10px 0;
			@media (min-width: 768px) {
				padding: 15px 0;
			}
			span {
				display: block;
				width: 25px;
				height: 25px;
				margin: auto;
				background: url(../assets/img/footer/yue_icon.png) no-repeat center;
				background-size: cover;
				cursor: pointer;
				@media (min-width: 768px) {
					width: 30px;
					height: 30px;
				}
			}
		}
	}
</style>