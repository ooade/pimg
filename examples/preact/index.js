import { h, Component } from 'preact'
import Image from '../../src/preact'
import './style.css'

import CodeMirror from 'react-codemirror'
require('codemirror/mode/javascript/javascript')

class Provider extends Component {
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

const WithPlaceholder = () => (
	<Provider title="Custom Placeholder">
		<Image
			className="myImage"
			src="https://res.cloudinary.com/stackpie/image/upload/v1513979515/-895520106_m1whb3.jpg"
			placeholder="https://res.cloudinary.com/stackpie/image/upload/c_thumb,w_10/v1513979515/-895520106_m1whb3.jpg"
		/>
		{Editor(`<Image
			className="myImage"
			src="https://res.cloudinary.com/stackpie/image/upload/v1513979515/-895520106_m1whb3.jpg"
			placeholder="https://res.cloudinary.com/stackpie/image/upload/c_thumb,w_10/v1513979515/-895520106_m1whb3.jpg"
		/>`)}
	</Provider>
)

const FetchOnDemand = () => (
	<Provider title="FetchOnDemand + Data saver mode">
		<Image
			className="myImage"
			fetchOnDemand
			dataSaver
			style={{ width: 200 }}
			src="https://res.cloudinary.com/stackpie/image/upload/v1511099014/IMG_20161127_203939_073_nwdnvv.jpg"
		/>
		{Editor(`<Image
			className="myImage"
			fetchOnDemand
			dataSaver
			style={{ width: 200 }}
			src="https://res.cloudinary.com/stackpie/image/upload/v1511099014/IMG_20161127_203939_073_nwdnvv.jpg"
		/>`)}
	</Provider>
)

const FetchOnDemandWithPlaceholderProp = () => (
	<Provider title="FetchOnDemand with Placeholder Prop">
		<Image
			className="myImage"
			fetchOnDemand
			src="https://res.cloudinary.com/stackpie/image/upload/v1513965940/1_znfymp.jpg"
			placeholder="https://res.cloudinary.com/stackpie/image/upload/c_thumb,w_10/v1513965940/1_znfymp.jpg"
		/>
		{Editor(`<Image
			className="myImage"
			fetchOnDemand
			src="https://res.cloudinary.com/stackpie/image/upload/v1513965940/1_znfymp.jpg"
			placeholder="https://res.cloudinary.com/stackpie/image/upload/c_thumb,w_10/v1513965940/1_znfymp.jpg"
		/>`)}
	</Provider>
)

const App = () => (
	<div>
		<nav class="navbar navbar-dark bg-dark">
			<a class="navbar-brand" href="#">
				Pimg With Preact
			</a>
		</nav>
		<SimpleImplementation />
		<WithPlaceholder />
		<FetchOnDemand />
		<FetchOnDemandWithPlaceholderProp />
	</div>
)

export default App
