import { test, expect } from 'vitest'
import { allowedFields } from './allowed-fields.js'

test('allowed-fields', () => {
	const af = allowedFields(['aField', 'bField'])

	expect(af({ aField: '', bField: '' })).toBe(true)
	expect(af({ bField: '', aField: '' })).toBe(true)

	expect(() => {
		af({ cField: '', aField: '', bField: '' })
	}).toThrow()
})
