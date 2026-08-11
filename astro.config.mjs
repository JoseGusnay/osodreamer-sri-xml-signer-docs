// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://josegusnay.github.io/osodreamer-sri-xml-signer-docs/",
  base: "/osodreamer-sri-xml-signer-docs/",

  integrations: [
    starlight({
      title: "osodreamer",
      description:
        "Genera, firma, valida y autoriza comprobantes electrónicos XML para el SRI de Ecuador desde Node.js, TypeScript y NestJS.",
      logo: {
        src: "./src/assets/osodreamer.png",
        alt: "osodreamer",
      },
      favicon: "/osodreamer.png",
      locales: {
        root: { label: "Español", lang: "es" },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/JoseGusnay/osodreamer-sri-xml-signer",
        },
      ],
      customCss: ["./src/styles/global.css"],
      sidebar: [
        { label: "Introducción", link: "/docs/" },
        { label: "Generador XML", link: "/docs/generar/" },
        { label: "Firmador", link: "/docs/firmador/" },
        { label: "Validador", link: "/docs/validador/" },
        { label: "Autorizador", link: "/docs/autorizador/" },
        {
          label: "Modelo de datos",
          items: [
            { label: "Generador", link: "/docs/modelo-datos/factura/" },
            { label: "Firmador", link: "/docs/modelo-datos/firmador/" },
            { label: "Validador", link: "/docs/modelo-datos/validador/" },
            { label: "Autorizador", link: "/docs/modelo-datos/autorizador/" },
          ],
        },
        {
          label: "Ejemplos",
          items: [
            { label: "Node + TS", link: "/docs/ejemplos/factura/node-ts/" },
          ],
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
