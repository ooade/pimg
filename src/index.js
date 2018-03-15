import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'whatwg-fetch'

class Image extends Component {
	state = {
		blob: null,
		loading: true,
		delayed: false,
		placeholder: null
	}

	setBlob = blob => this.setState({ blob })

	setPlaceholder = placeholder => this.setState({ placeholder })

	setLoading = loading => this.setState({ loading })

	delayFetchingImage = delayed => this.setState({ delayed })

	fetchImage = src => {
		fetch(src)
			.then(res => res.blob())
			.then(res => {
				this.setBlob(URL.createObjectURL(res))
				this.setLoading(false)
			})
			.catch(err => console.log(err))
	}

	image = () => this.imgElement

	fetchOnDemand = src => {
		try {
			let observer = new IntersectionObserver(entries => {
				let image = entries[0]

				if (image.isIntersecting) {
					this.fetchImage(src)
					this.delayFetchingImage(false)
					observer.disconnect()
				}
			})

			observer.observe(this.image())
		} catch (_) {
			// Fail gracefully
			console.warn('ScrollToView not supported on this browser')
			this.fetchImage(src)
			this.delayFetchingImage(false)
		}
	}

	componentDidMount() {
		const { dataSaver, src, fetchOnDemand, placeholder } = this.props

		// If it's a Cloudinary Image
		if (src.includes('cloudinary')) {
			let placeholder =
				placeholder || src.replace('/upload/', '/upload/c_thumb,w_30/')

			this.setPlaceholder(placeholder)
		}

		if (dataSaver) {
			this.delayFetchingImage(true)
		} else if (fetchOnDemand) {
			this.delayFetchingImage(true)
			this.fetchOnDemand(src)
		} else {
			this.fetchImage(src)
		}
	}

	render() {
		const {
			className,
			dataSaver,
			loadingClassName,
			src,
			placeholder,
			...rest
		} = this.props

		const { blob, loading } = this.state

		if (loading) {
			const classes = className
				? `${className} ${loadingClassName || className + '__loading'}`
				: 'pimg pimg__loading'

			return (
				<img
					className={classes}
					src={placeholder || this.state.placeholder}
					ref={i => (this.imgElement = i)}
					{...rest}
				/>
			)
		}

		if (dataSaver) {
			return (
				<div className="pimg__wrapper">
					<img
						className={classes}
						src={placeholder || this.state.placeholder}
						ref={i => (this.imgElement = i)}
						{...rest}
					/>
					<button
						className="pimg__btn"
						onClick={() => this.fetchImage(this.props.src)}
					>
						Load image
					</button>
				</div>
			)
		}

		return (
			<img className={className ? className : 'pimg'} src={blob} {...rest} />
		)
	}
}

Image.propTypes = {
	src: PropTypes.string.isRequired
}

Image.defaultProps = {
	dataSaver: false,
	src: ''
}

export default Image
