/**
 * @function config
 * @instance instance
 * @prop {String} className - The default className's for your PIMG(s)
 * @prop {String} placeholderClassName - The default placeholder className's for your image(s)
 * @prop {Function} onError - Determines how errors are handled in the component
 * @prop {Boolean | Object} dataSaver - Choose to use dataSaver mode
 * @prop {String} dataSaver.wrapperClassName - DataSaver wrapper className
 * @prop {String} dataSaver.buttonClassName - DataSaver button className
 */

const config = (() => {
	let instance

	const init = ({
		className = 'pimg',
		dataSaver = false,
		onError = () => {},
		placeholderClassName = 'pimg__thumbnail'
	} = {}) => {

		let wrapperClassName = 'pimg_wrapper',
			buttonClassName = 'pimg_btn'

		if (typeof dataSaver !== 'object' && dataSaver === true) {
			dataSaver = {
				wrapperClassName,
				buttonClassName
			}
		} else if (typeof dataSaver === 'object') {
			dataSaver = {
				wrapperClassName: dataSaver.wrapperClassName || wrapperClassName,
				buttonClassName: dataSaver.buttonClassName || buttonClassName
			}
		}

		return {
			getClassName: () => {
				return className
			},
			getDataSaver: () => {
				return dataSaver
			},
			getErrorHandler: () => {
				return onError
			},
			getPlaceholderClassName: () => {
				return placeholderClassName
			}
		}
	}

	return params => (instance ? instance : (instance = init(params)))
})()

export default config
