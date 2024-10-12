import { test, expect } from 'vitest'
import { regexp } from './regexp.js'

test('regexp', () => {
	const r = regexp(/^\d\d\d-\d\d\d$/)

	expect(r('111-222')).toBe(true)
	expect(r('333-444')).toBe(true)
	expect(r('555-666')).toBe(true)

	expect(() => {
		r('22d—555')
	}).toThrow()
})
