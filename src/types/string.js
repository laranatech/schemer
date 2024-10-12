const string = (value) => {
	if (typeof value === 'string') {
		return true
	}

	throw new Error(`${value} is not a string`)
}

export { string }
