<template>
	<section>
		<aside class="aside" v-show="show">
			<div class="logo">
				<span @click="toggleShow"></span>
			</div>
			<transition name="slide-fade">
				<nav v-show="navShow">
					<ul class="nav-list">
						<li>
							<router-link to="photography">旅拍服务</router-link>
						</li>
						<li>
							<router-link to="tourism">旅游服务</router-link>
						</li>
						<li>
							<router-link to="finance">金融服务</router-link>
						</li>
						<li>
							<router-link to="system">系统服务</router-link>
						</li>
						<li>
							<router-link to="marketing">营销服务</router-link>
						</li>
						<li>
							<router-link to="about">关于我们</router-link>
						</li>
						<li>
							<router-link to="join">如何加盟</router-link>
						</li>
					</ul>
				</nav>
			</transition>
		</aside>
	</section>
</template>
<script>
	export default {
		name: 'Aside',
		props: {
			show: {
				type: Boolean,
				default: false,
			}
		},
		data () {
			return {
				navShow: true,
			}
		},
		methods: {
			toggleShow() {
				// this.navShow = !this.navShow;
				this.$router.push('/')
			},
		}
	}
</script>
<style scoped lang="scss">
	.aside {
		position: fixed;
		top: 100px;
		left: 0;
		z-index: 999;
		font-family: 'Microsoft Yahei';
		@media (max-width: 640px) {
			display: none;
		}
		.logo {
			padding: 5px;
			text-align: center;
			background: #028AEE;
			span {
				display: inline-block;
				width: 30px;
				height: 30px;
				cursor: pointer;
				background: url(../assets/img/aside_logo.png) no-repeat center;
				background-size: cover;
			}
		}
	}
	.nav-list {
		text-align: center;
		background: #DEF0FE;
		li {
			padding: 5px;
			letter-spacing: 4px;
			// border-bottom: 1px solid #9CCEF3;
			// &:last-child {
			// 	border-bottom: none;
			// }
			// &:hover, &.active {
			// 	background: #9CCEF3
			// }
			&:nth-of-type(even) {
				background: #9CCEF3
			}
			a {
				display: inline-block;
				width: 100%;
				padding: 0 8px;
				font-size: 14px;
			}
			span {
				color: #337ab7;
				cursor: pointer;
			}
		}
	}
	.slide-fade-enter-active {
    transition: all .3s ease;
	}
	.slide-fade-leave-active {
	  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to {
	  transform: translateY(-10px);
	  opacity: 0;
	}
</style>