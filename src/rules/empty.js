const empty = () => {
	return (value) => {
		const errorMessage = `The value must be empty: ${value}`

		if (Array.isArray(value) || typeof value === 'string') {
			if (value.length === 0) {
				return true
			}

			throw new Error(errorMessage)
		}

		if (typeof value === 'object') {
			if (Object.keys(value).length === 0) {
				return true
			}

			throw new Error(errorMessage)
		}

		throw new Error(`Invalid value type: ${typeof value}`)
	}
}

export { empty }
