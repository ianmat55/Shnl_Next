module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		container: {
			center: true,
		},
		screens: {
			'tablet': '1000px',
			'banner': '800px'
		},
		extend: {
			fontFamily: {
				'sans-serif': ['Playfair Display'],
			},
			width: {
				300: '300px',
				325: '325px',
				2500: '2500px',
			},
			colors: {
				antiquewhite: '#faebd7',
			}
		},
	},
	plugins: [
		require('tailwindcss'),
	],
}