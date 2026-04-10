import type { APIRoute, GetStaticPaths } from 'astro';
import sharp from 'sharp';
import { articles } from '../../data/articles';

export const getStaticPaths: GetStaticPaths = () =>
  Object.keys(articles).map((slug) => ({ params: { slug } }));

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug!;
  const article = articles[slug];
  if (!article) return new Response('Not found', { status: 404 });

  // heroSvg viewBox is 800x400 — render at 1200x600 for Google Discover
  const svg = article.heroSvg;
  const pngBuffer = await sharp(Buffer.from(svg))
    .resize(1200, 600)
    .png()
    .toBuffer();

  return new Response(pngBuffer, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
