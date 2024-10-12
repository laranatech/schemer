const number = (value) => {
	if (!Number.isNaN(value) && typeof value === 'number') {
		return true
	}

	throw new Error(`${value} is NaN`)
}

export { number }
