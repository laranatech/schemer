const exact = (target) => {
	return (value) => {
		if (value === target) {
			return true
		}

		throw new Error(`${value} !== ${target}`)
	}
}

export { exact }
