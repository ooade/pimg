<template>
	<span>
		<img
		  v-if="loading"
		  class="pimg pimg__loading"
		  :src="thumb"
		/>
		<img
		  v-else
		  class="pimg"
		  :src="blob"
		/>
	</span>
</template>

<script>
	export default {
		data: () => ({
			loading: true,
			blob: null,
			thumb: null
		}),
		props: ['src'],
		mounted() {
			let thumb = this.src.replace('/upload/', '/upload/t_media_lib_thumb/')

			this.thumb = thumb
			fetch(this.src)
				.then(res => res.blob())
				.then(res => {
					let blob = URL.createObjectURL(res)

					this.blob = blob
					this.loading = false
				})
				.catch(err => console.log(err))
		}
	}
</script>