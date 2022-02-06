module.exports = {
	content: [
		'./index.php',

		"./src/**/*.js",
		"./src/**/*.vue",
	],

	theme: {
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
		},
		extend: {
			colors: {
				jx: {
					green: {
						medium: "#5fba2b",
						light: "#89c657",
						dark: "#098048",
					},
					gray: {
						dark: "#494949",
						light: "#8a918a"
					},
				},
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem',
				},
				screens: {
					sm: "100%",
					md: "100%",
					lg: "100%",
					xl: "1310px"
				},
			},
			flex: {
				100: "1 1 100px",
				200: "1 1 200px",
				272: "1 1 272px",
				368: "1 1 368px",
				300: "1 1 300px",
				400: "1 1 400px",
				500: "1 1 500px",
				600: "1 1 600px",
				700: "1 1 700px",
				800: "1 1 800px",
				900: "1 1 900px",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		// ...
		require("@tailwindcss/line-clamp"),
	],
};