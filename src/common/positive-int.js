import * as rules from '../rules'
import { validate } from '../schemer'

const positiveInt = {
	type: 'int',
	rules: [
		rules.positive(),
	],
}

const validatePositiveInt = (value) => {
	return validate(value, positiveInt)
}

export { positiveInt, validatePositiveInt }
