import React from 'react'
import ReactDOM from 'react-dom'
import Image, { Thumbnail } from '../../src'

const App = () => (
	<Image
		className="myImage"
		src="https://res.cloudinary.com/stackpie/image/upload/v1514275012/assassins_creed_revelations_concept_art-wallpaper-1366x768_qdl9vo.jpg"
	>
		<Thumbnail
			className="myImage__thumb"
			src="https://res.cloudinary.com/stackpie/image/upload/c_thumb,w_10/v1514275012/assassins_creed_revelations_concept_art-wallpaper-1366x768_qdl9vo.jpg"
		/>
		<Thumbnail
			className="myImage__thumb"
			src="https://res.cloudinary.com/stackpie/image/upload/c_thumb,w_10/v1514275012/assassins_creed_revelations_concept_art-wallpaper-1366x768_qdl9vo.jpg"
		/>
	</Image>
)

ReactDOM.render(<App />, document.getElementById('root'))
