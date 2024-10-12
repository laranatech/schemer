const max = (maxValue) => {

	return (value) => {
		if (value <= maxValue) {
			return true
		}

		throw new Error(`${value} cannot be greater than ${maxValue}`)
	}
}

export { max }
