"use client";
import { baseStyles, resetStyles } from "@app/styling";
import { Global } from "@emotion/react";

type GlobalCssProps = {};

const GlobalCss = (props: GlobalCssProps) => {
	return <Global styles={[resetStyles, baseStyles]} />;
};

export { GlobalCss };
export type { GlobalCssProps };
