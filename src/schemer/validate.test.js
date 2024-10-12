import { test, expect } from 'vitest'
import { validate } from './validate.js'
import * as rules from '../rules'

test('validate', () => {
	expect(validate(1, 'int')).toBe(true)
	expect(validate('1', 'string')).toBe(true)
	expect(validate(true, 'bool')).toBe(true)

	expect(validate([1, 2, 3], ['int'])).toBe(true)
	expect(validate(['John', 'Steve', 'Eric'], ['string'])).toBe(true)
	expect(validate([true, false, true], ['bool'])).toBe(true)

	expect(validate([1, 2, 3], { type: ['int'] })).toBe(true)

	expect(validate(10, {
		type: 'int',
		rules: [
			rules.positive(),
			rules.min(5),
			rules.max(15),
		],
		required: true,
		nullable: false,
	})).toBe(true)

	expect(() => {
		validate(null, { nullable: false })
	}).toThrow()

	expect(() => {
		validate(undefined, { required: true })
	}).toThrow()

	expect(() => {
		validate(10.2, 'int')
	}).toThrow()

	expect(() => {
		validate(10.2, {
			type: 'number',
			rules: [
				rules.min(20),
			],
		})
	}).toThrow()
})
