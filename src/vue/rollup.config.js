import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue'
import path from 'path'

let pkg = require('../../package.json')

const rename = name =>
	path.resolve(name.replace('dist', 'vue').replace('pimg', 'index'))

export default {
	input: path.join(__dirname + '/index.vue'),
	external: ['vue', 'whatwg-fetch'],
	plugins: [
		vue(),
		babel({
			exclude: 'node_modules/**'
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
				vue: 'vue'
			}
		}
	]
}
