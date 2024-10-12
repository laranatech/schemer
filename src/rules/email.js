import { regexp } from './regexp.js'

const email = () => {
	const r = regexp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
	return (value) => {
		try {
			r(value)
			return true
		} catch(_) {
			throw new Error(`Invalid email: ${value}`)
		}
	}
}

export { email }
