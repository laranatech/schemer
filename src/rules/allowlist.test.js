import { test, expect } from 'vitest'
import { allowlist } from './allowlist.js'

test('allowlist', () => {
	const a = allowlist(['car', 'bike', 'skate'])

	expect(a('car')).toBe(true)
	expect(a('bike')).toBe(true)
	expect(a('skate')).toBe(true)

	expect(() => {
		a('boat')
	}).toThrow()
})
