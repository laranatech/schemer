import { test, expect } from 'vitest'
import { blockedFields } from './blocked-fields.js'

test('blocked-fields', () => {
	const bf = blockedFields(['aField', 'bField'])

	expect(bf({ cField: '', fField: '' })).toBe(true)
	expect(bf({ eField: '', dField: '' })).toBe(true)

	expect(() => {
		bf({ aField: '', bField: '' })
	}).toThrow()
})
