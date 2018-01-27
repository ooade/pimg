import { h, Component } from 'preact'
import Image, { Thumbnail } from '../../src/preact'
import './style.css'

class Provider extends Component {
	render() {
		return (
			<div className="card" style={{ padding: 20, margin: 10 }}>
				<div className="card-body">
					<h5 className="card-title">{this.props.title}</h5>
				</div>
				{this.props.children}
			</div>
		)
	}
}

const SimpleImplementation = () => (
	<Provider title="Simple Implementation">
		<Image
			className="myImage"
			src="https://res.cloudinary.com/stackpie/image/upload/v1514275012/assassins_creed_revelations_concept_art-wallpaper-1366x768_qdl9vo.jpg"
		/>
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
	</Provider>
)

const ScrollToReveal = () => (
	<Provider title="ScrollToReveal">
		<Image
			className="myImage"
			scrollToReveal
			style={{ width: 200 }}
			src="https://res.cloudinary.com/stackpie/image/upload/v1511099014/IMG_20161127_203939_073_nwdnvv.jpg"
		/>
	</Provider>
)

const ScrollToRevealWithThumbnailProp = () => (
	<Provider title="ScrollToReveal with Custom Thumbnail">
		<Image
			className="myImage"
			scrollToReveal
			src="https://res.cloudinary.com/stackpie/image/upload/v1513965940/1_znfymp.jpg"
			thumbnail="https://res.cloudinary.com/stackpie/image/upload/c_thumb,w_10/v1513965940/1_znfymp.jpg"
		/>
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
		<WithThumbnail />
		<ScrollToReveal />
		<ScrollToRevealWithThumbnailProp />
	</div>
)

export default App
