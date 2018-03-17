<template>
	<div v-if="dataSaverMode" :class="wrapperClassName">
		<img
		  v-if="loading"
			ref="image"
		  :class="classNamesCombined"
		  :src="placeholder||placeholderData"
		/>
		<img
		  v-else
		  :class="className"
		  :src="blob"
		/>
		<button :class="buttonClassName" @click="fetchImage(src); dataSaverMode = false">Load image</button>
	</div>
	<div v-else>
		<img
		  v-if="loading"
			ref="image"
		  :class="classNamesCombined"
		  :src="placeholder||placeholderData"
		/>
		<img
		  v-else
		  :class="className"
		  :src="blob"
		/>
	</div>
</template>

<script>
import config from '../config.js'

export default {
	name: 'pimg',

	data: () => ({
		blob: null,
		buttonClassName: 'pimg__btn',
		className: 'pimg',
		classNamesCombined: 'pimg pimg__btn',
		dataSaverMode: false,
		delayed: false,
		loading: true,
		placeholderClassName: 'pimg__placeholder',
		placeholderData: null,
		wrapperClassName: 'pimg__wrapper'
	}),

	props: ['dataSaver', 'fetchOnDemand', 'placeholder', 'src'],

	methods: {
		delayFetchingImage(delayed) {
			this.delayed = delayed
		},
		fetchImage() {
			fetch(this.src)
				.then(res => res.blob())
				.then(res => {
					let blob = URL.createObjectURL(res)

					this.blob = blob
					this.loading = false
				})
		},
		_fetchOnDemand(src) {
			try {
				let observer = new IntersectionObserver(entries => {
					let image = entries[0]

					if (image.isIntersecting) {
						this.fetchImage(this.src)
						this.delayFetchingImage(false)
						observer.disconnect()
					}
				})

				observer.observe(this.$refs.image)
			} catch (_) {
				// Fail gracefully
				console.warn('ScrollToView not supported on this browser', _)
				this.fetchImage(this.src)
				this.delayFetchingImage(false)
			}
		}
	},

	mounted() {
		const {
			getButtonClassName,
			getClassName,
			getDataSaver,
			getFetchOnDemand,
			getPlaceholderClassName,
			getWrapperClassName
		} = config()

		this.buttonClassName = getButtonClassName()
		this.className = getClassName()
		this.dataSaverMode = typeof this.dataSaver !== 'undefined' || getDataSaver()
		this.placeholderClassName = getPlaceholderClassName()
		this.wrapperClassName = getWrapperClassName()
		this.classNamesCombined = this.className + ' ' + this.placeholderClassName

		if (this.src && this.src.includes('cloudinary')) {
			this.placeholderData =
				this.placeholder ||
				this.src.replace('/upload/', '/upload/c_thumb,w_30/')
		}

		if (typeof this.dataSaver !== 'undefined' || getDataSaver()) {
			this.delayFetchingImage(true)
		} else if (
			typeof this.fetchOnDemand !== 'undefined' ||
			getFetchOnDemand()
		) {
			this.delayFetchingImage(true)
			this._fetchOnDemand(this.src)
		} else {
			this.fetchImage(this.src)
		}
	}
}
</script>
