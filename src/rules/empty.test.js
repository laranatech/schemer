import { test, expect } from 'vitest'
import { empty } from './empty.js'

test('empty', () => {
	const e = empty()

	expect(e('')).toBe(true)
	expect(e([])).toBe(true)
	expect(e({})).toBe(true)

	expect(() => {
		e('123')
	}).toThrow()

	expect(() => {
		e([1])
	}).toThrow()

	expect(() => {
		e({ a: 1 })
	}).toThrow()
})
