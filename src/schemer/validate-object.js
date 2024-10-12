import { validateObjectSafely } from './validate-object-safely.js'

const validateObject = (value, schema) => {
	const { success, errors } = validateObjectSafely(value, schema)

	if (success) {
		return true
	}

	throw new Error(`Validation error:\n${errors.join('\n')}`)
}

export { validateObject }
