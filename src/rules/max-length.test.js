import { test, expect } from 'vitest'
import { maxLength } from './max-length.js'

test('max-length', () => {
	const m = maxLength(5)

	expect(m('12345')).toBe(true)
	expect(m([1, 2, 3, 4, 5])).toBe(true)
	expect(m('12')).toBe(true)
	expect(m([1, 2])).toBe(true)

	expect(() => {
		m('123456')
	}).toThrow()

	expect(() => {
		m([1, 2, 3, 4, 5, 6])
	}).toThrow()
})
