import babel from 'rollup-plugin-babel'
import path from 'path'

let pkg = require('../../package.json')

const rename = name =>
	path.resolve(name.replace('dist/', 'dist/preact/').replace('/pimg', '/index'))

export default {
	input: path.join(__dirname + '/index.js'),
	external: ['preact', 'whatwg-fetch'],
	plugins: [
		babel({
			exclude: 'node_modules/**',
			presets: ['backpack'],
			plugins: [['transform-react-jsx', { pragma: 'h' }], 'external-helpers']
		})
	],
	output: [
		{
			file: rename(pkg.main),
			format: 'cjs',
			sourcemap: true
		},
		{
			file: rename(pkg.module),
			format: 'es',
			sourcemap: true
		},
		{
			name: 'pimg',
			file: rename(pkg.umd),
			format: 'umd',
			sourcemap: true,
			globals: {
				preact: 'preact'
			}
		}
	]
}
