import { CSSObject } from "@emotion/react";
import { ButtonProps } from "./Button";

type ButtonStyles = {
	root: CSSObject;
};

const useButtonStyles = (props: ButtonProps): ButtonStyles => {
	return {
		root: {
			border: "none",
			padding: "8px 16px",
			borderRadius: "4px",
			background: "hotpink",
		},
	};
};

export { useButtonStyles };
