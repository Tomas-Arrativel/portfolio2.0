import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Sin este root, Turbopack infiere la carpeta padre (…/Programming) como
	// raíz y termina vigilando todos los proyectos vecinos y sus node_modules.
	turbopack: {
		root: path.resolve(__dirname),
	},
};

export default nextConfig;
