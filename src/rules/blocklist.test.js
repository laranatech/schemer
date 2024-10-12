import { test, expect } from 'vitest'
import { blocklist } from './blocklist.js'

test('blocklist', () => {
	const b = blocklist(['car', 'bike', 'skate'])

	expect(b('boat')).toBe(true)
	expect(b('horse')).toBe(true)
	expect(b('plane')).toBe(true)

	expect(() => {
		b('car')
	}).toThrow()
})
