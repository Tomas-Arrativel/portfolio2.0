import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
	return ["es", "en"].map((lang) => ({
		url: `${SITE_URL}/${lang}`,
		lastModified: new Date(),
		changeFrequency: "monthly",
		priority: lang === "es" ? 1 : 0.8,
		alternates: {
			languages: {
				es: `${SITE_URL}/es`,
				en: `${SITE_URL}/en`,
			},
		},
	}));
}
