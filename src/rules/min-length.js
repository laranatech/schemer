const minLength = (length) => {
	return (value) => {
		if (value.length >= length) {
			return true
		}

		throw new Error(`The value's length (${value.length}) is too short. Min: ${length}`)
	}
}

export { minLength }
