const positive = () => {
	return (value) => {
		if (value >= 0) {
			return true
		}

		throw new Error(`Value must be positive: ${value}`)
	}
}

export { positive }
