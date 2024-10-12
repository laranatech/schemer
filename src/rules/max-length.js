const maxLength = (length) => {
	return (value) => {
		if (value.length <= length) {
			return true
		}

		throw new Error(`The value's length (${value.length}) is too long. Min: ${length}`)
	}
}

export { maxLength }
