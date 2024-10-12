import * as rules from '../rules'
import * as types from '../types'

const validate = (value, config, name = '') => {
	const allowedTypes = rules.allowlist(Object.keys(types))

	if (typeof config === 'string') {
		if (config === 'any') {
			return true
		}
		allowedTypes(config)
		return types[config](value)
	}

	if (Array.isArray(config) && config.length === 1) {
		allowedTypes(config[0])
		return types.array(value) && value.every((item) => validate(item, config[0]))
	}

	if (typeof config !== 'object') {
		throw new Error(`${name ? name + ' | ' : ''}Invalid config: ${config}`)
	}

	rules.allowedFields(['type', 'required', 'rules', 'nullable'])(config)

	if (config.required === true && value === undefined) {
		throw new Error(`${name ? name + ' | ' : ''}Value is required`)
	}

	if (config.nullable === true && value === null) {
		return true
	}

	if (value === null) {
		throw new Error(`${name ? name + ' | ' : ''}Value cannot be null`)
	}

	if (Array.isArray(config.type) && config.type.length === 1) {
		const arrayItemConfig = {
			...config,
			type: config.type[0],
		}


		return types.array(value) && value.every(
			(item, i) => validate(item, arrayItemConfig, `${name}[${i}]`)
		)
	}

	allowedTypes(config.type)
	types[config.type](value)

	if (config.rules) {
		config.rules.forEach((r) => {
			r(value)
		})
	}

	return true
}

export { validate }
