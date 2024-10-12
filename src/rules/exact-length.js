const exactLength = (length) => {
	return (value) => {
		if (value.length === length) {
			return true
		}

		throw new Error(`The value's length (${value.length}) !== ${length}`)
	}
}

export { exactLength }
