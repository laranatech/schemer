import { test, expect } from 'vitest'
import { string } from './string.js'

test('string', () => {
	expect(string('')).toBe(true)
	expect(string('123')).toBe(true)
	expect(string('Hello, World!')).toBe(true)
	expect(string('undefined')).toBe(true)

	expect(() => {
		string(1)
	}).toThrow()

	expect(() => {
		string()
	}).toThrow()

	expect(() => {
		string(null)
	}).toThrow()

	expect(() => {
		string(true)
	}).toThrow()
})
