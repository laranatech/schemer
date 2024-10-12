import { test, expect } from 'vitest'
import { compareArrays } from './compare-arrays'

test('compare-arrays', () => {
	expect(compareArrays([], [])).toBe(true)
	expect(compareArrays([1, 2, 3], [1, 2, 3])).toBe(true)
	expect(compareArrays([true], [true])).toBe(true)

	expect(compareArrays([1, 2, 3], [3, 2, 1])).toBe(false)
	expect(compareArrays([true], [false])).toBe(false)
})
