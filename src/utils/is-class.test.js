import { test, expect } from 'vitest'
import { isClass } from './is-class.js'

test('is-class', () => {
	class A {}
	const type = A

	expect(isClass(A)).toBe(true)
	expect(isClass(type)).toBe(true)
	expect(isClass(function () {})).toBe(false)
	expect(isClass(() => {})).toBe(false)
	expect(isClass(class B {})).toBe(true)
})
