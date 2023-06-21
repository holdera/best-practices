/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin")

module.exports = {
	content: [],
	theme: {
		screens: {
			sm: '375px',
			mdSm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		fontSize: {
			xs: '0.75rem', //12px
			sm: '0.875rem', //14px
			base: '1rem', //16px
			md: '1.125rem', //18px
			lg: '1.5rem', //24px
			xl: '2rem', //32px
		},
		container: {
			center: true,
		},
		extend: {
			colors: {
				blue: '#181E8B',
				blue2: '#1B24A5',
				darkGrey: '#0D0D0D'
			},
			fontFamily: {
                gordita: ['Poppins', 'sans-serif'],
            },
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				".gradientBlue": {
					background:
					"linear-gradient(to right, rgba(37,38,183,0.65) 0%,rgba(37,38,183,0.63) 3%,rgba(8,9,42,0) 78%,rgba(0,0,0,0) 100%)",
				},
				".gradientBlue2": {
					background:
					"linear-gradient(to right, rgba(27,36,165,0.65) 0%,rgba(27,36,165,0.63) 3%,rgba(6,8,37,0) 78%,rgba(0,0,0,0) 100%)",
				}
			})
		})
	],
};
