import { test, expect } from 'vitest'
import { Schemer } from './schemer.js'
import * as rules from '../rules'

test('Schemer', () => {
	const s = new Schemer({
		id: {
			type: 'string',
			rules: [
				rules.regexp(/\d\d\d-\d\d\d/),
			],
		},
		x: 'int',
		y: {
			type: 'int',
			rules: [
				rules.positive(),
			],
		},
		name: {
			type: 'string',
			nullable: true,
		},
		email: {
			type: 'string',
			required: false,
			rules: [
				rules.email(),
			],
		},
	})

	expect(s.validate({
		x: 10,
		y: 20,
		name: 'null',
	})).toBe(true)

	expect(() => {
		s.validate({
			x: undefined,
			y: 10,
			name: null,
			email: 'e@vgenii.ru',
		})
	}).toThrow()
})
