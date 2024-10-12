import { test, expect } from 'vitest'
import { exactLength } from './exact-length.js'

test('exact-length', () => {
	const el = exactLength(5)

	expect(el('12345')).toBe(true)
	expect(el([1, 2, 3, 4, 5])).toBe(true)

	expect(() => {
		el('123456')
	}).toThrow()

	expect(() => {
		el([1, 2, 3, 4, 5, 6])
	}).toThrow()

	expect(() => {
		el('1234')
	}).toThrow()

	expect(() => {
		el([1, 2, 3, 4])
	}).toThrow()
})
