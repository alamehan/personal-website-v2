/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				primary: "#3B82F6", // Blue 500
				secondary: "#F43F5E", // Rose 500
				tertiary: "#22C55E", // Green 500
				brown: {
					50: "#FDF8F6",
					100: "#F2E8E5",
					200: "#EADDD7",
					300: "#E0CEC7",
					400: "#D2BAB0",
					500: "#BFA094",
					600: "#A18072",
					700: "#977669",
					800: "#846358",
					900: "#43302B",
				},
			},
			fontFamily: {
				poppins: ["DM Sans", "sans-serif"],
			},
		},
		fontSize: {
			h2_normal: ["45px", { lineHeight: "52px", fontWeight: "700" }],
			h2_mobile: ["36px", { lineHeight: "44px", fontWeight: "700" }],
			h3_normal: ["36px", { lineHeight: "44px", fontWeight: "700" }],
			h3_mobile: ["28px", { lineHeight: "36px", fontWeight: "700" }],
			h4_normal: ["24px", { lineHeight: "32px", fontWeight: "700" }],
			h5_normal: ["22px", { lineHeight: "28px", fontWeight: "700" }],
			p1_normal: ["28px", { lineHeight: "36px", fontWeight: "400" }],
			p1_mobile: ["24px", { lineHeight: "32px", fontWeight: "400" }],
			p2_normal: ["18px", { lineHeight: "24px", letterSpacing: "0.5px", fontWeight: "400" }],
			p2_mobile: ["16px", { lineHeight: "24px", letterSpacing: "0.15px", fontWeight: "400" }],
			navbar_normal: ["18px", { lineHeight: "24px", letterSpacing: "0.5px", fontWeight: "700" }],
			button_normal: ["18px", { lineHeight: "24px", letterSpacing: "0.5px", fontWeight: "500" }],
			label_normal: ["14px", { lineHeight: "20px", letterSpacing: "0.1px", fontWeight: "500" }],
			label_mobile: ["12px", { lineHeight: "16px", letterSpacing: "0.1px", fontWeight: "500" }],
		},
		screens: {
			sm: "360px", // Mobile (min-width: 360px)
			md: "768px", // Tablet Potrait (min-width: 768px)
			lg: "1024px", // Tablet Landscape (min-width: 1024px)
			xl: "1280px", // Desktop (min-width: 1280px)
		},
		borderRadius: {
			DEFAULT: "4px",
			full: "999px",
			sm: "8px",
			md: "12px",
			lg: "24px",
		},
	},
	plugins: [],
};
