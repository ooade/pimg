<template>
	<div>
		<h1>Hello, World!</h1>
		<pimg src="https://res.cloudinary.com/stackpie/image/upload/v1514275012/assassins_creed_revelations_concept_art-wallpaper-1366x768_qdl9vo.jpg">
		<pimg-thumbnail src="https://res.cloudinary.com/stackpie/image/upload/c_thumb,w_20/v1514275012/assassins_creed_revelations_concept_art-wallpaper-1366x768_qdl9vo.jpg" />
		</pimg>
	</div>
</template>

<script>
	import pimg, { thumbnail } from '../../../src/vue'

	export default {
		components: {
			pimg,
			'pimg-thumbnail': thumbnail
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
