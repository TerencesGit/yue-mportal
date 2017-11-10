<template>
	<section>
		<header>
			<img src="../../assets/img/join/banner.jpg" class="responsive-img p-show">
			<img src="../../assets/img/join/m_banner.jpg" class="responsive-img m-show">
		</header>
		<div class="title">
			<img src="../../assets/img/join/join_title.jpg" class="responsive-img p-show">
			<img src="../../assets/img/join/m_title.png" class="responsive-img m-show">
		</div>
		<div class="process">
			<img src="../../assets/img/join/banner2.jpg" class="responsive-img p-show">
			<img src="../../assets/img/join/m_banner2.jpg" class="responsive-img m-show">
		</div>
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
	.title {
		padding: 20px 30px;
		@media(min-width: 768px) {
			padding: 0;
		}
	}
</style>