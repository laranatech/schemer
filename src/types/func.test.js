import { test, expect } from 'vitest'
import { func } from './func.js'

test('func', () => {
	const a = () => {}
	function b() {}

	expect(func(function c() {})).toBe(true)
	expect(func(function () {})).toBe(true)
	expect(func(() => {})).toBe(true)
	expect(func(a)).toBe(true)
	expect(func(b)).toBe(true)
	expect(func(func)).toBe(true)

	expect(() => {
		func(1)
	}).toThrow()
})

