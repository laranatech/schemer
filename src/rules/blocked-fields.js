import { allowlist } from './allowlist.js'
import { filterObjectKeys, compareArrays } from '../utils'
import { blocklist } from './blocklist.js'

const blockedFields = (list) => {
	const f = filterObjectKeys(blocklist(list))

	return (value) => {
		const passedFields = f(value)

		if (compareArrays(passedFields, Object.keys(value))) {
			return true
		}

		const fa = filterObjectKeys(allowlist(list))
		const invalidFields = fa(value)

		throw new Error(`${value} has Invalid fields: [${invalidFields.join(', ')}]`)
	}
}

export { blockedFields }
