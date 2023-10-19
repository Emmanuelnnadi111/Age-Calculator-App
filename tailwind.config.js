/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./assets/**/*.html", "*.html", "*js"],
	theme: {
		fontFamily: {
			poppins: ["Poppins", "sans - serif"],
		},
		borderRadius: {
			'none': "0",
			'sm': "0.125rem",
			DEFAULT: "0.25rem",
			'md': "0.375rem",
			'lg': "2rem",
			'full': "9999px",
			'large': "150px",
		},
		extend: {
			colors: {
				Purple: "#854dff",
				Lightred: "#ff5757",
				White: "#ffffff",
				Offwhite: "#f0f0f0",
				Lightgrey: "#dbdbdb",
				Smokeygrey: "#716f6f",
				Offblack: "#141414",
			},
		},
	},
	plugins: [],
};

