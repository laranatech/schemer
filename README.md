# LaranaTech: Schemer

This is a bare minimum validation tool for js.

## Installation

```bash
npm install @laranatech/schemer
```

See [@laranatech/schemer](https://www.npmjs.com/package/@laranatech/schemer) on npm.

## Examples

### Importing

```js
// Browser
import { rules, Schemer } from '@laranatech/schemer'

// Node.js
const { rules, Schemer } = require('@laranatech/schemer')

```

### Validate a value

```js
const { validate, rules } = require('@laranatech/schemer')

// returns `true` if value is valid
// throws an error otherwise
validate(20, {
	type: 'int',
	rules: [
		rules.max(100),
		rules.min(10),
	],
})

validate([1, 2, 3], {
	type: ['int'], // validating an array
	rules: [
		rules.positive(),
	],
})

// type shorthands
validate(value, 'int')
validate([value], ['int'])

```

### Safe validation

Value can be validated without throwing an error

```js
const { success, errors } = validateSafely(10.1, 'int')

console.log(errors) // ['Error: Value must be integer: 10.1']

```

### Validate an objects

```js
const { Schemer, rules } = require('@laranatech/schemer')

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

s.validate({
	x: undefined,
	y: 10,
	name: null,
	email: 'e@vgenii.ru',
})

// Error: value must be integer: undefined

```

