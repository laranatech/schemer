import { test, expect } from 'vitest'
import { max } from './max.js'

test('max', () => {
	const m = max(20)

	expect(m(10)).toBe(true)
	expect(m(20)).toBe(true)
	expect(m(19)).toBe(true)
	expect(m(-129)).toBe(true)
	expect(m(0)).toBe(true)

	expect(() => {
		m(20.0000001)
	}).toThrow()
})
