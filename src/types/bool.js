const bool = (value) => {
	if (typeof value === 'boolean') {
		return true
	}

	throw new Error(`${value} must be boolean`)
}

export { bool }