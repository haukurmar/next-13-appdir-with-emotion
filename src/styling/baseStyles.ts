import { CSSObject } from "@emotion/react";

let baseColor = "#000";
export const baseStyles: CSSObject = {
	html: {
		fontSize: "100%",
		lineHeight: "1.5rem",
	},
	body: {
		color: baseColor,
		fontFamily: "Arial,sans-serif",
		fontSize: "100%",
		lineHeight: "1.5rem",
		margin: 0,
		padding: 24,
		background: "#f4f4f4",
	},
	strong: {
		fontWeight: 600,
	},
};
