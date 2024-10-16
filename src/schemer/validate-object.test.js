import { test, expect } from 'vitest'
import { validateObject } from './validate-object.js'
import * as rules from '../rules'

test('validate-object', () => {
	class A {}

	validateObject({
		x: 10,
		y: 20,
		id: '444-333-555',
		name: null,
		email: 'e@vgenii.ru',
		method: () => {},
		instance: new A(),
	}, {
		x: 'int',
		y: {
			type: 'int',
			rules: [
				rules.max(100),
				rules.min(10),
			],
		},
		id: {
			type: 'string',
			rules: [
				rules.regexp(/\d\d\d-\d\d\d-\d\d\d/),
			],
		},
		email: {
			type: 'string',
			rules: [
				rules.email(),
			],
		},
		name: {
			type: 'string',
			nullable: true,
		},
		method: 'func',
		instance: A,
	})

	expect(() => {
		validateObject({}, {
			name: {
				type: 'string',
				required: true,
				rules: [
					rules.notEmpty(),
				],
			},
		})
	}).toThrow()
})
