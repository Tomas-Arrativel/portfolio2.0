import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
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
			<main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
				<ScrollProgress />
				<CustomCursor />
				<Navbar lang={lang} dict={dict.nav} />
				<Hero dict={dict.hero} />
				<About dict={dict.about} />
				<Skills dict={dict.skills} />
				<Projects dict={dict.projects} />
				<Services dict={dict.services} />
				<Process dict={dict.process} />
				<Contact dict={dict.contact} />
				<Footer dict={dict.footer} />
			</main>
		</SmoothScroll>
	);
}
