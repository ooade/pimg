import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import 'whatwg-fetch'

import config from '../config'

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
			console.warn('fetchOnDemand not supported on this browser')
			this.fetchImage(src)
			this.delayFetchingImage(false)
		}
	}

	componentDidMount() {
		const { dataSaver, src, fetchOnDemand, placeholder } = this.props

		const { getDataSaver, getFetchOnDemand } = config()

		// If it's a Cloudinary Image
		if (src && src.includes('cloudinary')) {
			let placeholder =
				placeholder || src.replace('/upload/', '/upload/c_thumb,w_30/')

			this.setPlaceholder(placeholder)
		}

		if (dataSaver || getDataSaver()) {
			this.delayFetchingImage(true)
		} else if (fetchOnDemand || getFetchOnDemand()) {
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
			// we don't actually need fetchOnDemand here,
			// added it so we can append the [rest] props
			fetchOnDemand,
			placeholderClassName,
			src,
			placeholder,
			...rest
		} = this.props

		const { blob, loading } = this.state

		const {
			getButtonClassName,
			getClassName,
			getDataSaver,
			getPlaceholderClassName,
			getWrapperClassName
		} = config()

		const classes = className
			? `${className} ${placeholderClassName || getPlaceholderClassName()}`
			: placeholderClassName
				? `${className || getClassName()} ${placeholderClassName}`
				: `${getClassName()} ${getPlaceholderClassName()}`

		if ((dataSaver || getDataSaver()) && loading) {
			return (
				<div className={getWrapperClassName()}>
					<img
						className={classes}
						src={placeholder || this.state.placeholder}
						ref={i => (this.imgElement = i)}
						{...rest}
					/>
					<button
						className={getButtonClassName()}
						onClick={() => this.fetchImage(this.props.src)}
					>
						Load image
					</button>
				</div>
			)
		}

		if (loading) {
			return (
				<img
					className={classes}
					src={placeholder || this.state.placeholder}
					ref={i => (this.imgElement = i)}
					{...rest}
				/>
			)
		}

		return (
			<img
				className={className ? className : getClassName()}
				src={blob}
				{...rest}
			/>
		)
	}
}

Image.propTypes = {
	src: PropTypes.string.isRequired
}

export default Image

export { config }
