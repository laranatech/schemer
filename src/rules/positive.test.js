import { test, expect } from 'vitest'
import { positive } from './positive.js'

test('positive', () => {
	const p = positive()

	expect(p(1)).toBe(true)
	expect(p(0)).toBe(true)
	expect(p(0.000000001)).toBe(true)
	expect(p(100000)).toBe(true)

	expect(() => {
		p(-1)
	}).toThrow()
})
