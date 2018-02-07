import React, { Component } from 'react'
import PropTypes from "prop-types";
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

	delayFetchingImage = src => this.setState({ delayed: true })

	dataSaverMode = (src) => this.delayFetchingImage(src)
	
	image = () => this.imgElement

	scrollToReveal(src) {
		this.delayFetchingImage(src)
		const image = this.image()
		
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
		const { children, src, dataSaver, scrollToReveal, thumbnail } = this.props

		// No Child ? Assume it is a cloudinary image and fetch
		if (!children) {
			let thumbnail = thumbnail || src.replace('/upload/', '/upload/c_thumb,w_30/')

				if (dataSaver || (dataSaver && scrollToReveal)) {
					this.dataSaverMode(src)
				} else if (!dataSaver && scrollToReveal) {
					this.scrollToReveal(src)
				} else {
					this.fetchImage(src)
				}

			this.setThumbnail(thumbnail)
		}
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.scroller, false)
		window.removeEventListener('resize', this.scroller, false)
	}

	shouldRenderButton (dataSaver) {
		if (!dataSaver) return
		
		return (
			<button className='pimg__btn' onClick={dataSaver ? () => this.fetchImage(this.props.src) : null}>
				Load image
			</button>
		)
	}

	render() {
		const {
			children,
			className,
			loadingClassName,
			scrollToReveal,
			dataSaver,
			src,
			thumbnail,
			...rest
		} = this.props
		const { blob, loading } = this.state

		// No Child ? Just Render as usual
		if (!children) {
			if (loading) {
				const classes = className 
								? `${className} ${loadingClassName || className + '__loading'}` 
								: 'pimg pimg__loading'
				return (
					<div className='pimg__wrapper'>
						<img
							className={classes}
							src={thumbnail || this.state.thumbnail}
							ref={i => this.imgElement = i}
							{...rest}
						/>
						{this.shouldRenderButton(dataSaver)}
					</div>
				)
			}

			return (
				<div className='pimg__wrapper'>
					<img className={className ? className : 'pimg'} src={blob} {...rest} />
				</div>
			)
		}

		// If a child is found, clone and send some prop
		return React.cloneElement(children, {
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


Image.propTypes = {
	src: PropTypes.string.isRequired
}

Image.defaultProps = {
	src: '',
	dataSaver: false
}

export default Image
export { Thumbnail }
