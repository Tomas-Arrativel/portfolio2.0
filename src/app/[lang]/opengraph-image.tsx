import { ImageResponse } from "next/og";
import { hasLocale, locales } from "./dictionaries";

export const alt = "Tomás Arrativel - Developer & Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
	return locales.map((lang) => ({ lang }));
}

export default async function Image({
	params,
}: {
	params: Promise<{ lang: string }>;
}) {
	const { lang } = await params;
	const tagline =
		hasLocale(lang) && lang === "en"
			? "I automate and scale systems that grow businesses."
			: "Automatizo y escalo sistemas que hacen crecer negocios.";
	const badge =
		hasLocale(lang) && lang === "en"
			? "Developer · Ecommerce · AI Automation"
			: "Desarrollador · Ecommerce · Automatización con IA";

	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					padding: "80px",
					backgroundColor: "#0a0a0f",
					backgroundImage:
						"radial-gradient(circle at 85% 20%, rgba(124,58,237,0.35) 0%, rgba(10,10,15,0) 55%), radial-gradient(circle at 10% 90%, rgba(14,165,233,0.18) 0%, rgba(10,10,15,0) 50%)",
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						color: "#c4b5fd",
						fontSize: 26,
						letterSpacing: 4,
						textTransform: "uppercase",
						marginBottom: 28,
					}}
				>
					{badge}
				</div>
				<div
					style={{
						display: "flex",
						color: "#ffffff",
						fontSize: 84,
						fontWeight: 700,
						lineHeight: 1.1,
						marginBottom: 32,
					}}
				>
					Tomás Arrativel
				</div>
				<div
					style={{
						display: "flex",
						color: "#a1a1aa",
						fontSize: 38,
						lineHeight: 1.3,
						maxWidth: 900,
					}}
				>
					{tagline}
				</div>
				<div
					style={{
						display: "flex",
						marginTop: 60,
						width: 140,
						height: 6,
						borderRadius: 3,
						backgroundImage:
							"linear-gradient(to right, #7c3aed, rgba(124,58,237,0))",
					}}
				/>
			</div>
		),
		{ ...size },
	);
}
