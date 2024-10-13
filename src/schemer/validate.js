import * as rules from '../rules'
import * as types from '../types'
import * as utils from '../utils'
import { Schemer } from './schemer'

const allowedTypes = rules.allowlist(Object.keys(types))

const validateType = (value, type) => {
	if (type === 'any') {
		return true
	}
	if (utils.isClass(type)) {
		return types.instance(value, type)
	}

	allowedTypes(type)
	return types[type](value)
}

const validateArray = (value, config, name = '') => {
	types.array(value)

	if (config.type instanceof Schemer) {
		return value.every((item) => config.type.validate(item))
	}

	if (utils.isClass(config.type)) {
		return value.every((item) => validateType(item, config.type))
	}

	allowedTypes(config.type)
	return value.every((item, i) => validate(item, config, `${name}[${i}]`))
}

const validateNullable = (value, config, name = '') => {
	if (config.nullable === true && value === null) {
		return true
	}

	if (value === null) {
		throw new Error(`${name ? name + ' | ' : ''}Value cannot be null`)
	}

	return false
}

const validateRequired = (value, config, name = '') => {
	if (config.required === true && value === undefined) {
		throw new Error(`${name ? name + ' | ' : ''}Value is required`)
	}
	return config.required === false && value === undefined
}

const validateConfig = (config, name = '') => {
	if (typeof config !== 'object') {
		throw new Error(`${name ? name + ' | ' : ''}Invalid config: ${config}`)
	}

	return rules.allowedFields(['type', 'required', 'rules', 'nullable'])(config)
}

const validate = (value, config, name = '') => {
	if (typeof config === 'string' || utils.isClass(config)) {
		return validateType(value, config, name)
	}

	if (config instanceof Schemer) {
		return config.validate(value)
	}

	if (Array.isArray(config) && config.length === 1) {
		return validateArray(value, { type: config[0] }, name)
	}

	validateConfig(config, name)
	if (validateRequired(value, config, name)) {
		return true
	}

	if (validateNullable(value, config, name)) {
		return true
	}

	if (Array.isArray(config.type) && config.type.length === 1) {
		return validateArray(value, { ...config, type: config.type[0] }, name)
	}

	validateType(value, config.type)

	if (config.rules) {
		config.rules.forEach((r) => r(value))
	}

	return true
}

export { validate }
