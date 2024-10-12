import { test, expect } from 'vitest'
import { notEmpty } from './not-empty.js'

test('not-empty', () => {
	const ne = notEmpty()

	expect(ne('1')).toBe(true)
	expect(ne([1])).toBe(true)
	expect(ne({ a: 1 })).toBe(true)

	expect(() => {
		ne('')
	}).toThrow()

	expect(() => {
		ne([])
	}).toThrow()

	expect(() => {
		ne({})
	}).toThrow()
})
