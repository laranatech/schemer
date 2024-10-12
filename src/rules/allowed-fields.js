import { allowlist } from './allowlist.js'
import { filterObjectKeys, compareArrays } from '../utils'
import { blocklist } from './blocklist.js'

const allowedFields = (list) => {
	const f = filterObjectKeys(allowlist(list))

	return (value) => {
		const passedFields = f(value)

		if (compareArrays(passedFields, Object.keys(value))) {
			return true
		}

		const fb = filterObjectKeys(blocklist(list))
		const invalidFields = fb(value)

		throw new Error(`${value} has Invalid fields: [${invalidFields.join(', ')}]`)
	}
}

export { allowedFields }
