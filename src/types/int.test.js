import { test, expect } from 'vitest'
import { int } from './int.js'

test('int', () => {
	expect(int(1)).toBe(true)
	expect(int(-1)).toBe(true)
	expect(int(0)).toBe(true)
	expect(int(99)).toBe(true)
	expect(int(1.0)).toBe(true)

	expect(() => {
		int(1.1)
	}).toThrow()

	expect(() => {
		int('1')
	}).toThrow()

	expect(() => {
		int()
	}).toThrow()

	expect(() => {
		int(null)
	}).toThrow()

	expect(() => {
		int(true)
	}).toThrow()
})
