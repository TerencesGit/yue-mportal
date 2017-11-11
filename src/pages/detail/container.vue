<template>
	<section>
		<AsideComp :show="asideShow"></AsideComp>
		<keep-alive>
			<transition name="fade">
				<router-view></router-view>
			</transition>
	  </keep-alive>
	  	<div class="btn-top transition" v-show="asideShow" @click="toTop">
				<!-- <i class="el-icon-arrow-up"></i> -->
				<span>顶部</span>
			</div>
		<FooterComp></FooterComp>
	</section>
</template>
<script>
	import { getMyInfo } from '@/api'
	import AsideComp from '@/components/Aside'
	import FooterComp from '@/components/Footer'
	export default {
		components: {
			AsideComp,
			FooterComp
		},
		data() {
			return {
				asideShow: true
			}
		},
		methods: {
			scroll() {
				let asideTops = window.screen.availHeight - 400;
				this.asideShow = window.scrollY >= 100 ? true : false;
			},
			getUserInfo() {
	      getMyInfo().then(res => {
	        if(res.data.code === '0001') {
	          // let userInfo = res.data.result.userInfo;
	        } else {
	          this.$toast(res.data.message)
	        	this.$router.push('/login')
	        }
	      }).catch(err => {
	        console.log(err)
	        this.$catchError(err)
	      })
	    },
	    toTop () {
	    	let timer = null;
	      let gotoTop = () => {
	        let currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
	        currentPosition -= currentPosition*0.2;
	        if (currentPosition > 0) {
	          window.scrollTo(0, currentPosition);
	        } else {
	          window.scrollTo(0, 0);
	          clearInterval(timer);
	          timer = null;
	        }
	      }
	      timer = setInterval(gotoTop, 1)
	    }
		},
		mounted () {
			this.asideShow = false;
			this.getUserInfo()
			document.addEventListener('scroll', this.scroll)
			if(document.getElementById('iconDiv1')) return;
			let _53code = document.createElement("script");
		  _53code.src = "http://tb.53kf.com/code/code/9006078/1";
		  let s = document.getElementsByTagName("script")[0]; 
		  s.parentNode.insertBefore(_53code, s);
		}
	}
</script>
<style scoped lang="scss">
	.btn-top {
		position: fixed;
		right: 20px;
		bottom: 100px;
		z-index: 999;
		width: 36px;
		height: 36px;
		line-height: 36px;
		text-align: center;
		color: #999;
		cursor: pointer;
		background: #fff;
		border: 1px solid #e5e5e5;
		span {
			display: block;
			font-size: 12px;
		}
	}
</style>