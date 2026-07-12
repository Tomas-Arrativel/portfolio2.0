import "server-only";
import type { Dictionary } from "@/dictionaries/types";

const dictionaries = {
	es: () => import("@/dictionaries/es").then((m) => m.default),
	en: () => import("@/dictionaries/en").then((m) => m.default),
};

export type Locale = keyof typeof dictionaries;

export const locales = Object.keys(dictionaries) as Locale[];

export const hasLocale = (locale: string): locale is Locale =>
	locale in dictionaries;

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
	dictionaries[locale]();
