import { ImageResponse } from "next/og";
import { hasLocale, locales } from "./dictionaries";

export const alt = "Tomás Arrativel - Full Stack Developer";
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
	const english = hasLocale(lang) && lang === "en";

	const role = english ? "Full Stack Developer" : "Desarrollador Full Stack";
	const stack = "React · Next.js · Node.js · Python · PostgreSQL";
	const availability = english
		? "Available for remote work · Argentina (GMT-3)"
		: "Disponible para trabajo remoto · Argentina (GMT-3)";

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
						color: "#ffffff",
						fontSize: 84,
						fontWeight: 700,
						lineHeight: 1.1,
						marginBottom: 16,
					}}
				>
					Tomás Arrativel
				</div>
				<div
					style={{
						display: "flex",
						color: "#c4b5fd",
						fontSize: 46,
						fontWeight: 600,
						marginBottom: 36,
					}}
				>
					{role}
				</div>
				<div
					style={{
						display: "flex",
						color: "#a1a1aa",
						fontSize: 34,
						lineHeight: 1.3,
						maxWidth: 950,
					}}
				>
					{stack}
				</div>
				<div
					style={{
						display: "flex",
						marginTop: 56,
						color: "#e4e4e7",
						fontSize: 28,
					}}
				>
					{availability}
				</div>
			</div>
		),
		{ ...size },
	);
}
