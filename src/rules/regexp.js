const regexp = (pattern, flags = undefined) => {
	const r = new RegExp(pattern, flags)

	return (value) => {
		if (r.test(value)) {
			return true
		}

		throw new Error(`${value} doesn't match the pattern: ${String(pattern)}${flags ? '/' + String(flags) : ''}`)
	}
}

export { regexp }
