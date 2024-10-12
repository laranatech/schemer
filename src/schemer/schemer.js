import { validateObjectSafely } from './validate-object-safely.js'


class Schemer {
	schema = {}

	constructor(schema) {
		this.schema = schema
	}

	validate(value) {
		const { success, errors } = this.validateSafely(value)

		if (success) {
			return true
		}

		throw new Error(`Validation error:\n${errors.join('\n')}`)
	}

	validateSafely(value) {
		return validateObjectSafely(value, this.schema)
	}
}

export { Schemer }