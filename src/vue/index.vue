<template>
	<span>
		<img
		  v-if="loading"
		  class="pimg pimg__loading"
		  :src="placeholder"
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
	name: 'pimg',
	data: () => ({
		loading: true,
		blob: null,
		placeholder: null
	}),
	props: ['src'],
	mounted() {
		let placeholder = this.src.replace('/upload/', '/upload/c_thumb,w_30/')

		this.placeholder = placeholder
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
