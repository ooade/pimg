import { h, Component, cloneElement } from 'preact'
import 'whatwg-fetch'

class Image extends Component {
	state = {
		blob: null,
		loading: true,
		delayed: false,
		thumbnail: null
	}

	setBlob = blob => this.setState({ blob })

	setThumbnail = thumbnail => this.setState({ thumbnail })

	setLoading = loading => this.setState({ loading })

	fetchImage = src => {
		fetch(src)
			.then(res => res.blob())
			.then(res => {
				this.setBlob(URL.createObjectURL(res))
				this.setLoading(false)
			})
			.catch(err => console.log(err))
	}

	scroller = (src, imgTop) => {
		if (window.scrollY >= imgTop && this.state.delayed) {
			this.setState({ delayed: false })
			this.fetchImage(src)
		}
	}

	getYPosition = element => {
		let yPosition = 0

		while (element) {
			yPosition += element.offsetTop - element.scrollTop + element.clientTop
			element = element.offsetParent
		}

		return yPosition
	}

	delayFetchingImage = src => {
		this.setState({ delayed: true })

		const image = this.imgElement

		window.addEventListener(
			'scroll',
			this.scroller.bind(this, src, this.getYPosition(image)),
			false
		)

		window.addEventListener(
			'resize',
			this.scroller.bind(this, src, this.getYPosition(image)),
			false
		)
	}

	componentDidMount() {
		const { children, src, scrollToReveal, thumbnail } = this.props

		// No Child ? Assume it is a cloudinary image and fetch
		// Note: VNode is always an array in preact
		if (!children.length) {
			let thumbnail =
				thumbnail || src.replace('/upload/', '/upload/c_thumb,w_30/')

			if (!scrollToReveal) {
				this.fetchImage(src)
			} else {
				this.delayFetchingImage(src)
			}

			this.setThumbnail(thumbnail)
		}
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.scroller, false)
		window.removeEventListener('resize', this.scroller, false)
	}

	render() {
		const {
			children,
			className,
			loadingClassName,
			scrollToReveal,
			src,
			thumbnail,
			...rest
		} = this.props

		const { blob, loading } = this.state

		// No Child ? Just Render as usual
		if (!children.length) {
			if (loading) {
				return (
					<img
						className={
							className
								? `${className} ${loadingClassName || className + '__loading'}`
								: 'pimg pimg__loading'
						}
						src={thumbnail || this.state.thumbnail}
						ref={i => {
							this.imgElement = i
						}}
						{...rest}
					/>
				)
			}

			return (
				<img className={className ? className : 'pimg'} src={blob} {...rest} />
			)
		}

		// If a child is found, clone and send some prop
		return cloneElement(children[0], {
			blob,
			fetchImage: this.fetchImage,
			image: src,
			imageClassName: className,
			loading,
			setThumbnail: this.setThumbnail,
			thumbnail
		})
	}
}

class Thumbnail extends Component {
	componentDidMount() {
		const { fetchImage, image, setThumbnail, src } = this.props

		setThumbnail(src)

		fetchImage(image)
	}

	render() {
		const { blob, className, imageClassName, loading, thumbnail } = this.props

		if (loading) {
			return (
				<img
					className={
						className && imageClassName
							? `${className} ${imageClassName}`
							: 'pimg pimg_loading'
					}
					src={thumbnail}
				/>
			)
		}

		return (
			<img className={imageClassName ? imageClassName : 'pimg'} src={blob} />
		)
	}
}

Image.defaultProps = {
	src: ''
}

export default Image
export { Thumbnail }
