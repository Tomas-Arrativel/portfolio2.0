import { NextResponse, type NextRequest } from "next/server";

const LOCALES = ["es", "en"];
const DEFAULT_LOCALE = "es";

function getLocale(request: NextRequest): string {
	// 1. Preferencia guardada por el toggle de idioma.
	const cookie = request.cookies.get("lang")?.value;
	if (cookie && LOCALES.includes(cookie)) return cookie;

	// 2. Idioma del navegador (Accept-Language, ordenado por q).
	const header = request.headers.get("accept-language");
	if (header) {
		const preferred = header
			.split(",")
			.map((part) => {
				const [tag, q] = part.trim().split(";q=");
				return { lang: tag.toLowerCase().split("-")[0], q: q ? Number(q) : 1 };
			})
			.sort((a, b) => b.q - a.q);
		for (const { lang } of preferred) {
			if (LOCALES.includes(lang)) return lang;
		}
	}

	return DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl;

	const pathnameHasLocale = LOCALES.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
	);
	if (pathnameHasLocale) return;

	const locale = getLocale(request);
	request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
	return NextResponse.redirect(request.nextUrl);
}

export const config = {
	// Excluye internals de Next y archivos estáticos (rutas con extensión).
	matcher: ["/((?!_next|api|.*\\..*).*)"],
};
