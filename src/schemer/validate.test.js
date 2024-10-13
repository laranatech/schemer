import { test, expect } from 'vitest'
import { validate } from './validate.js'
import * as rules from '../rules'

test('validate shorthands', () => {
	expect(validate(1, 'int')).toBe(true)
	expect(validate('1', 'string')).toBe(true)
	expect(validate(true, 'bool')).toBe(true)
	expect(validate(() => {}, 'func')).toBe(true)
})

test('validate array shorthands', () => {
	expect(validate([1, 2, 3], ['int'])).toBe(true)
	expect(validate(['John', 'Steve', 'Eric'], ['string'])).toBe(true)
	expect(validate([true, false, true], ['bool'])).toBe(true)
})

test('validate', () => {
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
})

test('validate instance', () => {
	class A {}
	expect(validate(new A(), A)).toBe(true)
	expect(validate(new A(), { type: A })).toBe(true)
	expect(validate([new A(), new A()], [A])).toBe(true)

	expect(validate(null, {
		type: A,
		nullable: true,
	})).toBe(true)

	expect(validate(undefined, {
		type: A,
		required: false,
	})).toBe(true)
})

test('validate fails', () => {
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
