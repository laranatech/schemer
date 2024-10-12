import * as rules from '../rules'
import { validate } from '../schemer'

const email = {
	type: 'string',
	rules: [
		rules.email(),
	],
}

const validateEmail = (value) => {
	return validate(value, email)
}

export { email, validateEmail }
