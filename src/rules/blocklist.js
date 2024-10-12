const blocklist = (list) => {
	return (value) => {
		if (!list.includes(value)) {
			return true
		}

		throw new Error(`${value} is forbidden: [${list.join(', ')}]`)
	}
}

export { blocklist }
