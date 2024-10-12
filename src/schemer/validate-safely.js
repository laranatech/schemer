import { validate } from './validate.js'

const validateSafely = (value, config, name = '') => {
	const errors = []
	try {
		validate(value, config, name)
	} catch(e) {
		errors.push(e)
	}

	return { success: errors.length === 0, errors }
}

export { validateSafely }
