const min = (minValue) => {

	return (value) => {
		if (value >= minValue) {
			return true
		}

		throw new Error(`${value} cannot be less than ${minValue}`)
	}
}

export { min }
