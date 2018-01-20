import React from 'react'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import EnzymeToJSON from 'enzyme-to-json'

// Setup Enzyme Adapter
configure({ adapter: new Adapter() })

import Image, { Thumbnail } from '../src/'

const image =
	'https://res.cloudinary.com/stackpie/image/upload/v1513979515/-895520106_m1whb3.jpg'

const thumbnail = image.replace('/upload/', '/upload/c_thumb,w_30/')

describe('pimg', () => {
	test('renders correctly', () => {
		const component = mount(<Image src={image} />)

		expect(EnzymeToJSON(component)).toMatchSnapshot()
	})
})

describe('Image', () => {
	test('generates thumbnail when loading', () => {
		const component = mount(<Image src={image} />)

		if (component.state().loading) {
			expect(component.state().thumbnail).toBe(thumbnail)
		}
	})

	test('can take a Thumnail child component', () => {
		const component = mount(
			<Image src={image}>
				<Thumbnail src={thumbnail} />
			</Image>
		)

		expect(EnzymeToJSON(component)).toMatchSnapshot()
	})

	test('uses the default classNames when loading', () => {
		const component = shallow(<Image src={image} />)

		if (component.state().loading) {
			expect(component.props().className).toBe('pimg pimg__loading')
		}
	})

	test('uses the loadingClassName passed when loading', () => {
		const component = shallow(<Image className="myImage" loadingClassName="image_is_loading" src={image} />)

		if (component.state().loading) {
			expect(component.props().className).toBe('myImage image_is_loading')
		}
	})

	test('appends `__loading` if loadingClassName isn\'t passed', () => {
		const component = shallow(<Image className="myImage" src={image} />)

		if (component.state().loading) {
			expect(component.props().className).toBe('myImage myImage__loading')
		}
	})
})

describe('Thumbnail', () => {
	test('uses the thumbnail passed', () => {
		const thumbnail = 'xyz'

		const component = shallow(
			<Image src={image}>
				<Thumbnail src={thumbnail} />
			</Image>
		)

		if (component.state().loading) {
			expect(component.props().src).toBe(thumbnail)
		}
	})

	test('uses the className passed when loading', () => {
		const component = shallow(
			<Image className="myImage" src={image}>
				<Thumbnail className="myThumbnail" src={thumbnail} />
			</Image>
		)

		if (component.state().loading) {
			expect(component.props().className).toBe('myThumbnail')
			expect(component.props().imageClassName).toBe('myImage')
		}
	})
})
