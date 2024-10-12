import { test, expect } from 'vitest'
import { minLength } from './min-length.js'

test('min-length', () => {
	const m = minLength(5)

	expect(m('12345')).toBe(true)
	expect(m([1, 2, 3, 4, 5])).toBe(true)
	expect(m('123456')).toBe(true)
	expect(m([1, 2, 3, 4, 5, 6])).toBe(true)

	expect(() => {
		m('12')
	}).toThrow()

	expect(() => {
		m([1, 2])
	}).toThrow()
})
