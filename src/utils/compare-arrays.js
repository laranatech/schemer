const compareArrays = (a, b) => {
	return a.length === b.length && a.every((element, index) => element === b[index])
}

export { compareArrays }
