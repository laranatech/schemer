const negative = () => {
	return (value) => {
		if (value < 0) {
			return true
		}

		throw new Error(`Value must be negative: ${value}`)
	}
}

export { negative }
