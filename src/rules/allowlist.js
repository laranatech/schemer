const allowlist = (list) => {
	return (value) => {
		if (list.includes(value)) {
			return true
		}

		throw new Error(`${value} is not on the list: [${list.join(', ')}]`)
	}
}

export { allowlist }
