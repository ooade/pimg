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
		buttonClassName = 'pimg__btn',
		className = 'pimg',
		dataSaver = false,
		fetchOnDemand = false,
		error = null,
		placeholderClassName = 'pimg__placeholder',
		wrapperClassName = 'pimg__wrapper'
	} = {}) => {
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
			onError: error => {
				error = error
			},
			getClassName: () => {
				return className
			},
			getButtonClassName: () => {
				return buttonClassName
			},
			getDataSaver: () => {
				return dataSaver
			},
			getError: cb => {
				return cb(error)
			},
			getFetchOnDemand: () => {
				return fetchOnDemand
			},
			getPlaceholderClassName: () => {
				return placeholderClassName
			},
			getWrapperClassName: () => {
				return wrapperClassName
			}
		}
	}

	return params => (instance ? instance : (instance = init(params)))
})()

export default config
