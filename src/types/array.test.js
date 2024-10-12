import { test, expect } from 'vitest'
import { array } from './array.js'

test('array', () => {
	expect(array([])).toBe(true)
	expect(array([1, 2, 3])).toBe(true)

	expect(() => {
		array(1)
	}).toThrow()

	expect(() => {
		array('')
	}).toThrow()

	expect(() => {
		array({})
	}).toThrow()
})
