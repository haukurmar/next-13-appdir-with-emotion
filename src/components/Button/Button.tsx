"use client";
/** @jsxImportSource @emotion/react */
import { useButtonStyles } from "./buttonStyles";
import { ReactNode } from "react";

type ButtonProps = {
	children?: ReactNode;
};

const Button = (props: ButtonProps) => {
	const styles = useButtonStyles(props);

	return <button css={styles.root}>{props.children}</button>;
};

export { Button };
export type { ButtonProps };
