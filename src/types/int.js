/**
 * Valiating that value is an integer
 * @param {*} value 
 * @returns {boolean} true if value is integer
 * @throws an error if value is not an integer
 */
const int = (value) => {
	if (Number.isInteger(value)) {
		return true
	}

	throw new Error(`Value must be integer: ${value}`)
}

export { int }
