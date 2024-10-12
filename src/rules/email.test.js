import { test, expect } from 'vitest'
import { email } from './email.js'

test('email', () => {
	const e = email()

	expect(e('e@vgenii.ru')).toBe(true)
	expect(e('example@example.com')).toBe(true)
	expect(e('john@gmail.com')).toBe(true)

	expect(() => {
		e('example@test')
	}).toThrow()

	expect(() => {
		e('@test')
	}).toThrow()

	expect(() => {
		e('@')
	}).toThrow()

	expect(() => {
		e('example@')
	}).toThrow()
})
