<template>
	<div>
		<h1>Hello, World!</h1>
		<pimg src="https://res.cloudinary.com/stackpie/image/upload/v1514275012/assassins_creed_revelations_concept_art-wallpaper-1366x768_qdl9vo.jpg" />
	</div>
</template>

<script>
	import pimg from '../../../src/vue'

	export default {
		components: {
			pimg
		}
	}
</script>

<style>
	.pimg {
		width: 500px;
	}

	.pimg__loading {
		filter: blur(5vw);
		transform: scale(1.05);
	}
</style>
