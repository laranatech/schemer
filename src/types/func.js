const func = (value) => {
	if (typeof value === 'function') {
		return true
	}

	throw new Error(`${value} is not a function`)
}

export { func }
