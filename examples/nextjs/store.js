import { createStore, combineReducers } from 'redux'

const reducer = (state = { dataSaver: false }, action) => {
	const { type } = action

	switch (type) {
		case 'TOGGLE_DATA_SAVER':
			return { dataSaver: !state.dataSaver }
		default:
			return state
	}
}

export const toggleDataSaver = () => {
	return {
		type: 'TOGGLE_DATA_SAVER'
	}
}

export const initStore = (initialState = { dataSaver: true }) => {
	return createStore(reducer, initialState)
}
