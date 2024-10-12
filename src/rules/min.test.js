import { test, expect } from 'vitest'
import { min } from './min.js'

test('min', () => {
	const m = min(20)

	expect(m(300)).toBe(true)
	expect(m(22)).toBe(true)
	expect(m(200)).toBe(true)
	expect(m(129)).toBe(true)
	expect(m(21)).toBe(true)

	expect(() => {
		m(19.9999999999999)
	}).toThrow()
})
