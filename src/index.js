import React, { Component } from 'react'
import 'whatwg-fetch'

class Image extends Component {
	state = {
		blob: null,
		loading: true,
		thumbnail: null
	}

	componentDidMount() {
		const { children, src } = this.props

		// No Child ? Assume it is a cloudinary image and fetch
		if (!children.length) {
			let thumbnail = src.replace('/upload/', '/upload/c_thumb,w_30/')

			this.setState({
				thumbnail
			})

			fetch(src)
				.then(res => res.blob())
				.then(res => {
					let blob = URL.createObjectURL(res)
					this.setState({
						blob,
						loading: false
					})
				})
				.catch(err => console.log(err))
		}
	}

	render() {
		const { children, className, src } = this.props
		const { blob, loading, thumbnail } = this.state

		// No Child ? Just Render as usual
		if (!children.length) {
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
		return React.cloneElement(children[0], {
			image: src,
			imageClassName: className
		})
	}
}

class Thumbnail extends Component {
	state = {
		blob: null,
		loading: true,
		thumbnail: null
	}

	componentDidMount() {
		const { src, image } = this.props

		this.setState({
			thumbnail: src
		})

		fetch(image)
			.then(res => res.blob())
			.then(res => {
				let blob = URL.createObjectURL(res)
				this.setState({
					blob,
					loading: false
				})
			})
			.catch(err => console.log(err))
	}

	render() {
		const { className, imageClassName } = this.props
		const { blob, loading, thumbnail } = this.state

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
