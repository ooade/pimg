import React from 'react'
import Image from 'pimg'
import withRedux from 'next-redux-wrapper'
import { initStore, toggleDataSaver } from '../store'

class Index extends React.Component {
	render() {
		const { dataSaver, toggleDataSaver } = this.props

		return (
			<div>
				<button onClick={toggleDataSaver}>Toggle data saver</button>
				<div className="block">
					<Image
						dataSaver={dataSaver}
						src="https://res.cloudinary.com/stackpie/image/upload/v1522078692/owl-3218837_640_a0lavn.png"
					/>
				</div>
				<div className="block">
					<Image
						dataSaver={dataSaver}
						src="https://res.cloudinary.com/stackpie/image/upload/v1522078701/dog-3216207_640_zyfari.png"
					/>
				</div>
				<div className="block">
					<Image
						dataSaver={dataSaver}
						fetchOnDemand
						src="https://res.cloudinary.com/stackpie/image/upload/v1522078744/hare-3232830_640_zxlnkk.png"
					/>
				</div>
			</div>
		)
	}
}

export default withRedux(initStore, ({ dataSaver }) => ({ dataSaver }), {
	toggleDataSaver
})(Index)
