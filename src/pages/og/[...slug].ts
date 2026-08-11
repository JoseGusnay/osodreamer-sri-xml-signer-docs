import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

const entries = await getCollection("docs");

const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]));

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  param: "slug",
  getImageOptions: (_id, page: (typeof pages)[number]) => ({
    title: page.data.title,
    description: page.data.description,
    logo: {
      path: "./src/assets/osodreamer.png",
      size: [120],
    },
    // zinc-950 de fondo con acento indigo, la misma paleta del sitio
    bgGradient: [
      [9, 9, 11],
      [24, 24, 27],
    ],
    border: { color: [99, 102, 241], width: 20, side: "inline-start" },
    padding: 80,
    font: {
      title: { color: [250, 250, 250], weight: "Bold" },
      description: { color: [161, 161, 170] },
    },
  }),
});
