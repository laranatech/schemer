const filterObjectKeys = (method) => {
	return (value) => {
		return Object.keys(value).filter((key) => {
			try {
				return method(key)
			} catch(_) {
				return false
			}
		})
	}
}

export { filterObjectKeys }
