import { test, expect } from 'vitest'
import { instance } from './instance.js'

test('instance', () => {
	class A {}
	class B {}

	const aType = A

	const a = new A()
	const a1 = new aType()

	const b = new B()

	expect(instance(a, A)).toBe(true)
	expect(instance(a, aType)).toBe(true)
	expect(instance(a1, A)).toBe(true)
	expect(instance(a1, aType)).toBe(true)

	expect(() => {
		instance(b, A)
	}).toThrow()
})
