<template>
	<span>
		<img
		  v-if="loading"
		  class="pimg pimg__loading"
		  :src="placeholder||placeholderData"
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
		placeholderData: null
	}),

	props: ['src', 'placeholder'],

	mounted() {
		if (!this.placeholder) {
			this.placeholderData = this.src.replace(
				'/upload/',
				'/upload/c_thumb,w_30/'
			)
		}

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
