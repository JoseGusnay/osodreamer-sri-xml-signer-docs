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
      favicon: "/favicon.png",
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
      routeMiddleware: "./src/routeData.ts",
      sidebar: [
        { label: "Introducción", link: "/docs/" },
        {
          label: "Inicio rápido",
          link: "/docs/inicio-rapido/",
          badge: { text: "Empieza aquí", variant: "tip" },
        },
        {
          label: "El flujo paso a paso",
          items: [
            { label: "Generador XML", link: "/docs/generar/" },
            { label: "Firmador", link: "/docs/firmador/" },
            { label: "Validador", link: "/docs/validador/" },
            { label: "Autorizador", link: "/docs/autorizador/" },
          ],
        },
        {
          label: "Solución de problemas",
          items: [
            { label: "Errores del SRI", link: "/docs/errores-sri/" },
            { label: "Errores de la librería", link: "/docs/errores-libreria/" },
            { label: "Certificado .p12", link: "/docs/certificado-p12/" },
            { label: "Pruebas y producción", link: "/docs/ambientes/" },
          ],
        },
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
