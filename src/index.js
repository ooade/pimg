import React, { Component } from 'react'
import 'whatwg-fetch'

class Image extends Component {
	state = {
		blob: null,
		loading: true,
		thumbnail: null
	}

	setBlob = blob => {
		this.setState({ blob })
	}

	setThumbnail = thumbnail => {
		this.setState({ thumbnail })
	}

	setLoading = loading => {
		this.setState({ loading })
	}

	fetchImage = src => {
		fetch(src)
			.then(res => res.blob())
			.then(res => {
				this.setBlob(URL.createObjectURL(res))
				this.setLoading(false)
			})
			.catch(err => console.log(err))
	}

	componentDidMount() {
		const { children, src } = this.props

		// No Child ? Assume it is a cloudinary image and fetch
		if (!children) {
			let thumbnail = src.replace('/upload/', '/upload/c_thumb,w_30/')

			this.fetchImage(src)
			this.setThumbnail(thumbnail)
		}
	}

	render() {
		const { children, className, src } = this.props
		const { blob, loading, thumbnail } = this.state

		// No Child ? Just Render as usual
		if (!children) {
			if (loading) {
				return (
					<img
						className={
							className
								? `${className} ${className}__loading`
								: 'pimg pimg__loading'
						}
						src={thumbnail}
					/>
				)
			}

			return <img className={className ? className : 'pimg'} src={blob} />
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

export { Thumbnail }
export default Image
