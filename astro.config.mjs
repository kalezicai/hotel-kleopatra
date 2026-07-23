import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://www.hotelkleopatra.me",
  output: "static",
  integrations: [react()],
  build: {
    assets: "_assets",
  },
  vite: {
    resolve: {
      alias: {
        "next/image": new URL("src/next/image.tsx", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1"),
        "next/link": new URL("src/next/link.tsx", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1"),
        "next/navigation": new URL("src/next/navigation.ts", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1"),
      },
    },
  },
});
