import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

/**
 * Inyecta las etiquetas og:image / twitter:image apuntando a la tarjeta social
 * que genera src/pages/og/[...slug].ts para cada pagina.
 *
 * La ruta se construye sin barra inicial y sobre `context.site` (que ya incluye
 * el base del sitio), porque una barra inicial descartaria ese base.
 */
export const onRequest = defineRouteMiddleware((context) => {
  const { head, id } = context.locals.starlightRoute;

  const ogImageUrl = new URL(
    `og/${id || "index"}.png`,
    context.site ?? "https://josegusnay.github.io/osodreamer-sri-xml-signer-docs/"
  );

  head.push({
    tag: "meta",
    attrs: { property: "og:image", content: ogImageUrl.href },
  });
  head.push({
    tag: "meta",
    attrs: { name: "twitter:image", content: ogImageUrl.href },
  });
  head.push({
    tag: "meta",
    attrs: { name: "twitter:card", content: "summary_large_image" },
  });
});
