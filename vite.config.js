import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		lib: {
			entry: 'src/index.js',
			name: 'schemer',
			fileName: (format) => `schemer.${format}.js`,
			formats: ['es', 'umd', 'cjs'],
		},
		rollupOptions: {
			external: ['fs', 'path'],
		},
		target: 'es6',
	},
})
