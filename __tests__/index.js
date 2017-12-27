const React = require('react')
const { configure, mount } = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
import EnzymeToJSON from 'enzyme-to-json'
import { setTimeout } from 'timers'

// Setup Enzyme Adapter
configure({ adapter: new Adapter() })

const Image = require('../dist/pimg')

describe('pimg', () => {
	test('basic render', () => {
		const image =
			'https://res.cloudinary.com/stackpie/image/upload/v1513979515/-895520106_m1whb3.jpg'

		const thumb = image.replace('/upload/', '/upload/t_media_lib_thumb/')

		const wrapper = mount(<Image src={image} />)

		expect(wrapper.props().src).toBe(image)

		if (wrapper.state().loading) {
			expect(wrapper.state().thumb).toBe(thumb)
		}

		expect(EnzymeToJSON(wrapper)).toMatchSnapshot()
	})
})
