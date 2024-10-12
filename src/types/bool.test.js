import { test, expect } from 'vitest'
import { bool } from './bool.js'

test('bool', () => {
	expect(bool(true)).toBe(true)
	expect(bool(false)).toBe(true)

	expect(() => {
		bool(1)
	}).toThrow()

	expect(() => {
		bool(-1)
	}).toThrow()

	expect(() => {
		bool(0)
	}).toThrow()

	expect(() => {
		bool('true')
	}).toThrow()
})
