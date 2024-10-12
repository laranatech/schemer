const array = (value) => {
	if (Array.isArray(value)) {
		return true
	}

	throw new Error(`${value} must be an array`)
}

export { array }
