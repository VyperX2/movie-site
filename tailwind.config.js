/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {},
			colors: {
				navbarbg: "#1976D2",
				darkbg: "#121212",
			},
		},
	},
	plugins: [],
};
