const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			zIndex: {
				'100': '100',
			}
		}
	},

	plugins: []
};

module.exports = config;
