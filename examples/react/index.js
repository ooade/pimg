import React from 'react'
import ReactDOM from 'react-dom'
import Image from '../../src'

import config from '../../src/config'

config({
	className: 'pimg'
}).getError(error => {
	if (error) {
		console.log({ error })
	}
})

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
			src="https://res.cloudinary.com/dsevf03vj/image/upload/v1540223649/captain_america_the_winter_soldier_steve_rogers_chris_evans_captain_america_93014_1440x900_gwf6dh.jpg"
		/>
		{Editor(`<Image
				className="myImage"
				dataSaver
				src="https://res.cloudinary.com/dsevf03vj/image/upload/v1540223649/captain_america_the_winter_soldier_steve_rogers_chris_evans_captain_america_93014_1440x900_gwf6dh.jpg"
		/>`)}
	</Provider>
)

const WithPlaceholder = () => (
	<Provider title="Custom Placeholder">
		<Image
			className="myImage"
			src="https://res.cloudinary.com/dsevf03vj/image/upload/v1540223761/night_sky_snow-wallpaper-1440x900_b8bta9.jpg"
			placeholder="https://res.cloudinary.com/dsevf03vj/image/upload/c_thumb,w_10/v1540223761/night_sky_snow-wallpaper-1440x900_b8bta9.jpg"
		/>
		{Editor(`<Image
			className="myImage"
			src="https://res.cloudinary.com/dsevf03vj/image/upload/v1540223761/night_sky_snow-wallpaper-1440x900_b8bta9.jpg"
			placeholder="https://res.cloudinary.com/dsevf03vj/image/upload/c_thumb,w_10/v1540223761/night_sky_snow-wallpaper-1440x900_b8bta9.jpg"
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
			src="https://res.cloudinary.com/dsevf03vj/image/upload/v1540223719/naruto_uzumaki_naruto_ninja_113276_1440x900_rwgddw.jpg"
		/>
		{Editor(`<Image
			className="myImage"
			fetchOnDemand
			dataSaver
			style={{ width: 200 }}
			src="https://res.cloudinary.com/dsevf03vj/image/upload/v1540223719/naruto_uzumaki_naruto_ninja_113276_1440x900_rwgddw.jpg"
		/>`)}
	</Provider>
)

const FetchOnDemandWithPlaceholderProp = () => (
	<Provider title="FetchOnDemand with Placeholder Prop">
		<Image
			className="myImage"
			fetchOnDemand
			src="https://res.cloudinary.com/dsevf03vj/image/upload/v1540223766/dark_earth-wallpaper-1440x900_se1quy.jpg"
		/>
		{Editor(`<Image
			className="myImage"
			fetchOnDemand
			src="https://res.cloudinary.com/dsevf03vj/image/upload/v1540223766/dark_earth-wallpaper-1440x900_se1quy.jpg"
		/>`)}
	</Provider>
)

const App = () => (
	<div>
		<SimpleImplementation />
		<WithPlaceholder />
		<FetchOnDemand />
		<FetchOnDemandWithPlaceholderProp />
	</div>
)

ReactDOM.render(<App />, document.getElementById('root'))
