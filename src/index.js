import React from 'react'
import 'whatwg-fetch'

class Image extends React.Component {
	state = {
		loading: true,
		blob: null,
		thumb: null
	}

	componentDidMount() {
		let thumb = this.props.src.replace('/upload/', '/upload/t_media_lib_thumb/')

		this.setState({ thumb })

		fetch(this.props.src)
			.then(res => res.blob())
			.then(res => {
				let blob = URL.createObjectURL(res)
				this.setState({ blob, loading: false })
			})
			.catch(err => console.log(err))
	}

	render() {
		if (this.state.loading) {
			return <img className="pimg pimg__loading" src={this.state.thumb} />
		}

		return <img className="pimg" src={this.state.blob} />
	}
}

export default Image
