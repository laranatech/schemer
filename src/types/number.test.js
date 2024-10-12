import { test, expect } from 'vitest'
import { number } from './number.js'

test('number', () => {
	expect(number(1)).toBe(true)
	expect(number(-1)).toBe(true)
	expect(number(0)).toBe(true)
	expect(number(99)).toBe(true)

	expect(() => {
		number('1')
	}).toThrow()

	expect(() => {
		number()
	}).toThrow()

	expect(() => {
		number(null)
	}).toThrow()

	expect(() => {
		number(true)
	}).toThrow()
})
