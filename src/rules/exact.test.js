import { test, expect } from 'vitest'
import { exact } from './exact.js'

test('exact', () => {
	expect(exact(300)(300)).toBe(true)
	expect(exact(true)(true)).toBe(true)
	expect(exact('---')('---')).toBe(true)
	expect(exact(false)(false)).toBe(true)

	const a = ['1', '2', '3']

	expect(exact(a)(a)).toBe(true)

	expect(() => {
		exact(a)(['1', '2', '3'])
	}).toThrow()
})
