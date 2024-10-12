import * as rules from '../rules'
import { validate } from '../schemer'

const positiveNumber = {
	type: 'number',
	rules: [
		rules.positive(),
	],
}

const validatePositiveNumber = (value) => {
	return validate(value, positiveNumber)
}

export { positiveNumber, validatePositiveNumber }
