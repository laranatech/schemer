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

test('', () => {
	const p = new Schemer({
		x: 'number',
		y: 'number',
	})

	const s = new Schemer({
		points: [p],
		morePoints: {
			type: [p],
		},
		point: p,
		anotherPoint: { type: p },
	})

	s.validate({
		points: [
			{ x: 1, y: 2 },
			{ x: 3, y: 4 },
			{ x: 5, y: 6 },
		],
		morePoints: [
			{ x: 7, y: 8 },
			{ x: 9, y: 10 },
		],
		point: { x: 11, y: 12 },
	})
})
