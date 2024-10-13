import * as rules from '../rules'

const isClass = (value) => {
	const r = rules.regexp(/^class\s/)

	try {
		return typeof value === 'function' && r(value)
	} catch(_) {
		return false
	}
}

export { isClass }
