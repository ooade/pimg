import React from 'react'
import ReactDOM from 'react-dom'
import Image, { Thumbnail } from '../../src'

import CodeMirror from 'react-codemirror'
require('codemirror/mode/javascript/javascript')

class Provider extends React.Component {
	render() {
		return (
			<div className="row">
					<div className="card" style={{ margin: 10, padding: 10 }}>
						<div className="card-body">
							<h5 className="card-title">{this.props.title}</h5>
							{this.props.children[0]}
						</div>
					</div>
				<div className="col-sm" style={{ marginTop: 100, width: 400 }}>
					{this.props.children[1]}
				</div>
			</div>
		)
	}
}

const Editor = code => (
	<CodeMirror
		value={code}
		options={{
			mode: 'javascript',
			readOnly: true,
			tabSize: 0,
			lineWrapping: true,
			indentWithTabs: true,
			lineNumbers: true,
			theme: 'material'
		}}
	/>
)

const SimpleImplementation = () => (
	<Provider title="Simple Implementation + Data saver mode">
		<Image
			className="myImage"
			dataSaver
			src="https://res.cloudinary.com/stackpie/image/upload/v1514275012/assassins_creed_revelations_concept_art-wallpaper-1366x768_qdl9vo.jpg"
		/>
		{Editor(`<Image
			className="myImage"
			dataSaver
			src="https://res.cloudinary.com/stackpie/image/upload/v1514275012/assassins_creed_revelations_concept_art-wallpaper-1366x768_qdl9vo.jpg"
		/>`)}
	</Provider>
)

const WithThumbnail = () => (
	<Provider title="Custom Thumbnail">
		<Image
			className="myImage"
			src="https://res.cloudinary.com/stackpie/image/upload/v1513979515/-895520106_m1whb3.jpg"
		>
			<Thumbnail
				className="myImage__thumb"
				src="https://res.cloudinary.com/stackpie/image/upload/c_thumb,w_10/v1513979515/-895520106_m1whb3.jpg"
			/>
		</Image>
		{Editor(`<Image
			className="myImage"
			src="https://res.cloudinary.com/stackpie/image/upload/v1513979515/-895520106_m1whb3.jpg"
		>
			<Thumbnail
				className="myImage__thumb"
				src="https://res.cloudinary.com/stackpie/image/upload/c_thumb,w_10/v1513979515/-895520106_m1whb3.jpg"
			/>
		</Image>`)}
	</Provider>
)

const ScrollToReveal = () => (
	<Provider title="ScrollToReveal + Data saver mode">
		<Image
			className="myImage"
			scrollToReveal
			dataSaver
			style={{ width: 200 }}
			src="https://res.cloudinary.com/stackpie/image/upload/v1511099014/IMG_20161127_203939_073_nwdnvv.jpg"
		/>
		{Editor(`<Image
			className="myImage"
			scrollToReveal
			dataSaver
			style={{ width: 200 }}
			src="https://res.cloudinary.com/stackpie/image/upload/v1511099014/IMG_20161127_203939_073_nwdnvv.jpg"
		/>`)}
	</Provider>
)

const ScrollToRevealWithThumbnailProp = () => (
	<Provider title="ScrollToReveal with Thumbnail Prop">
		<Image
			className="myImage"
			scrollToReveal
			src="https://res.cloudinary.com/stackpie/image/upload/v1513965940/1_znfymp.jpg"
			thumbnail="https://res.cloudinary.com/stackpie/image/upload/c_thumb,w_10/v1513965940/1_znfymp.jpg"
		/>
		{Editor(`<Image
			className="myImage"
			scrollToReveal
			src="https://res.cloudinary.com/stackpie/image/upload/v1513965940/1_znfymp.jpg"
			thumbnail="https://res.cloudinary.com/stackpie/image/upload/c_thumb,w_10/v1513965940/1_znfymp.jpg"
		/>`)}
	</Provider>
)

const App = () => (
	<div>
		<SimpleImplementation />
		<WithThumbnail />
		<ScrollToReveal />
		<ScrollToRevealWithThumbnailProp />
	</div>
)

ReactDOM.render(<App />, document.getElementById('root'))
