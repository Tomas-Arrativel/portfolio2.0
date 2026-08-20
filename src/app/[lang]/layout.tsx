import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Syne, DM_Sans } from "next/font/google";
import "../globals.css";
import { getDictionary, hasLocale, locales, type Locale } from "./dictionaries";
import { SITE_URL, GITHUB_URL, LINKEDIN_URL, EMAIL } from "@/lib/site";

// Fuentes self-hosted por next/font: sin request a fonts.googleapis.com en
// runtime y sin layout shift.
const display = Syne({
	subsets: ["latin"],
	weight: ["400", "600", "700", "800"],
	variable: "--font-display",
	display: "swap",
});

const body = DM_Sans({
	subsets: ["latin"],
	variable: "--font-body",
	display: "swap",
});

export async function generateStaticParams() {
	return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ lang: string }>;
}): Promise<Metadata> {
	const { lang } = await params;
	if (!hasLocale(lang)) notFound();
	const dict = await getDictionary(lang);

	return {
		metadataBase: new URL(SITE_URL),
		title: dict.meta.title,
		description: dict.meta.description,
		keywords: dict.meta.keywords,
		authors: [{ name: "Tomás Arrativel" }],
		icons: {
			icon: "/favicon.png",
		},
		alternates: {
			canonical: `/${lang}`,
			languages: { es: "/es", en: "/en" },
		},
		openGraph: {
			title: dict.meta.title,
			description: dict.meta.ogDescription,
			type: "profile",
			url: `/${lang}`,
			locale: lang === "es" ? "es_AR" : "en_US",
			siteName: "Tomás Arrativel",
		},
	};
}

function personJsonLd(lang: Locale) {
	const spanish = lang === "es";

	return {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Tomás Arrativel",
		url: `${SITE_URL}/${lang}`,
		email: `mailto:${EMAIL}`,
		jobTitle: spanish ? "Desarrollador Full Stack" : "Full Stack Developer",
		description: spanish
			? "Desarrollador full stack. React, Next.js, Node.js, Python y PostgreSQL. Disponible para trabajo remoto."
			: "Full stack developer. React, Next.js, Node.js, Python and PostgreSQL. Available for remote roles.",
		nationality: "Argentina",
		address: {
			"@type": "PostalAddress",
			addressCountry: "AR",
		},
		worksFor: {
			"@type": "Organization",
			name: spanish
				? "Municipalidad de Gualeguay"
				: "Municipality of Gualeguay",
		},
		sameAs: [GITHUB_URL, LINKEDIN_URL],
		knowsLanguage: ["es", "en"],
		knowsAbout: [
			"TypeScript",
			"JavaScript",
			"React",
			"Next.js",
			"Node.js",
			"Python",
			"FastAPI",
			"PostgreSQL",
			"Prisma",
			"REST APIs",
		],
	};
}

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
}) {
	const { lang } = await params;
	if (!hasLocale(lang)) notFound();

	return (
		<html lang={lang} className={`${display.variable} ${body.variable}`}>
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(personJsonLd(lang)),
					}}
				/>
				{children}
			</body>
		</html>
	);
}
