<template>
	<section>
		<header>
			<img src="../../assets/img/finance/banner.png" class="responsive-img">
		</header>
		<main class="main">
			<div class="yuebaifen">
				<img src="../../assets/img/finance/m_banner2.png" class="responsive-img m-show">
				<img src="../../assets/img/finance/yuebaifen.png" class="responsive-img p-show">
			</div>
			<div class="product">
				<img src="../../assets/img/finance/m_banner3.png" class="responsive-img m-show">
				<img src="../../assets/img/finance/product.png" class="responsive-img p-show">
			</div>
			<div class="advantage">
				<img src="../../assets/img/finance/m_banner4.png" class="responsive-img m-show">
				<img src="../../assets/img/finance/advantage.png" class="responsive-img p-show">
			</div>
			<div class="application">
				<img src="../../assets/img/finance/application.png" class="responsive-img">
			</div>
			<div class="supply-chain">
				<img src="../../assets/img/finance/m_banner6.png" class="responsive-img m-show">
				<img src="../../assets/img/finance/chain.png" class="responsive-img p-show">
			</div>
			<div class="payment">
				<img src="../../assets/img/finance/payment.jpg" class="responsive-img">
			</div>
			<div class="settlement">
				<img src="../../assets/img/finance/settlement.png" class="responsive-img">
			</div>
		</main>
	</section>
</template>
<script>
	export default {
		mounted () {
			window.scrollTo(0, 0);
		}
	}
</script>
<style scoped lang="scss">
	.main {
		background: #fff;
		.yuebaifen {
			padding: 30px;
			text-align: center;
			@media(min-width: 768px) {
				padding: 0;
			}
		}
		.advantage, .supply-chain {
			padding: 30px;
		}
	}
</style>