import { test, expect } from 'vitest'
import { filterObjectKeys } from './filter-object-keys.js'

test('filter-object-keys', () => {
	const f1 = filterObjectKeys((key) => key.startsWith('a'))
	expect(f1({ another: '', aField: '' }).length).toBe(2)
	expect(f1({ brother: '', bField: '' }).length).toBe(0)
})
