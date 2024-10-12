import { validate } from './validate.js'

const validateObjectSafely = (value, schema) => {
	const schemaFields = Object.keys(schema)
	const fields = Object.keys(value)

	const errors = []

	const missing = schemaFields.filter((key) => {
		if (schema[key].required !== true) {
			return false
		}

		return !fields.includes(key)
	})

	if (missing.length > 0) {
		errors.push(`Missing required fields: ${missing.join(', ')}`)
	}

	fields.every((key) => {
		if (!schemaFields.includes(key)) {
			errors.push(`Unknown field: ${key}`)
			return
		}

		try {
			return validate(value[key], schema[key], key)
		} catch(e) {
			errors.push(e)
		}
	})

	return { success: errors.length === 0, errors }
}

export { validateObjectSafely }
