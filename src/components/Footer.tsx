export default function Footer() {
	return (
		<footer
			className="py-8 px-6 md:px-16 text-center"
			style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
		>
			<p className="text-zinc-600 text-sm">
				© {new Date().getFullYear()} Tomás Arrativel · Diseñado y construido por
				mí
			</p>
		</footer>
	);
}
