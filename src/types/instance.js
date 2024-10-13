const instance = (value, type) => {
	if (value instanceof type) {
		return true
	}

	throw new Error(`${value} is not an instance of ${type}`)
}

export { instance }
