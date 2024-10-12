import { test, expect } from 'vitest'
import { negative } from './negative.js'

test('negative', () => {
	const n = negative()

	expect(n(-1)).toBe(true)
	expect(n(-1000000)).toBe(true)
	expect(n(-0.000000001)).toBe(true)

	expect(() => {
		n(0)
	}).toThrow()

	expect(() => {
		n(1)
	}).toThrow()
})
