/** @type {import('tailwindcss').Config} */

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
	plugins: [],
};
