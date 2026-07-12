import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { getDictionary, hasLocale, locales, type Locale } from "./dictionaries";
import { SITE_URL, GITHUB_URL, LINKEDIN_URL, EMAIL } from "@/lib/site";

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
			type: "website",
			url: `/${lang}`,
			locale: lang === "es" ? "es_AR" : "en_US",
			siteName: "Tomás Arrativel",
		},
	};
}

function personJsonLd(lang: Locale) {
	return {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Tomás Arrativel",
		url: `${SITE_URL}/${lang}`,
		email: `mailto:${EMAIL}`,
		jobTitle: lang === "es" ? "Desarrollador y builder" : "Developer & builder",
		nationality: "Argentina",
		sameAs: [GITHUB_URL, LINKEDIN_URL],
		knowsAbout: [
			"Next.js",
			"React",
			"Python",
			"AI automation",
			"Digital marketing",
			"Ecommerce",
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
		<html lang={lang}>
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
