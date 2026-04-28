import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Tomás Arrativel — Developer & Builder",
	description:
		"Desarrollador, marketer y builder. Combino programación, IA y marketing digital para construir negocios y sistemas que generan resultados reales.",
	keywords: [
		"desarrollador",
		"marketing digital",
		"automatización",
		"IA",
		"ecommerce",
		"Next.js",
	],
	authors: [{ name: "Tomás Arrativel" }],
	openGraph: {
		title: "Tomás Arrativel — Developer & Builder",
		description:
			"Programación, IA y marketing digital para construir negocios que escalan.",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es" className="scroll-smooth">
			<body>{children}</body>
		</html>
	);
}
