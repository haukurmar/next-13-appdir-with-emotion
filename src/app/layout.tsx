import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalCss, NextAppDirEmotionCacheProvider } from "@app/components";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NextAppDirEmotionCacheProvider options={{ key: "my-app" }}>
					{children}
					<GlobalCss />
				</NextAppDirEmotionCacheProvider>
				<Analytics />
			</body>
		</html>
	);
}
