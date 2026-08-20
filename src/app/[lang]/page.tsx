import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import SmoothScroll from "@/components/providers/SmoothScroll";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";
import { getDictionary, hasLocale } from "./dictionaries";

export default async function Home({
	params,
}: {
	params: Promise<{ lang: string }>;
}) {
	const { lang } = await params;
	if (!hasLocale(lang)) notFound();
	const dict = await getDictionary(lang);

	return (
		<SmoothScroll>
			<a
				href="#hero"
				className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:px-4 focus:py-2 focus:rounded-full focus:bg-violet-600 focus:text-white focus:text-sm"
			>
				{dict.nav.skipToContent}
			</a>
			<main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
				<ScrollProgress />
				<CustomCursor />
				<Navbar lang={lang} dict={dict.nav} />
				<Hero lang={lang} dict={dict.hero} />
				<About dict={dict.about} />
				<Projects lang={lang} dict={dict.projects} />
				<Skills dict={dict.skills} />
				<Experience dict={dict.experience} />
				<Contact lang={lang} dict={dict.contact} footer={dict.footer} />
			</main>
		</SmoothScroll>
	);
}
