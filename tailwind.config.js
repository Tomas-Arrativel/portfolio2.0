/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				display: ["var(--font-display)", "Syne", "sans-serif"],
				body: ["var(--font-body)", "DM Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
