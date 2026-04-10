/**
 * Injects accessibility attributes into an inline SVG string.
 * Adds role="img", aria-labelledby, <title> and <desc> elements.
 */
export function makeAccessibleSvg(
  svg: string,
  title: string,
  description: string,
  slug: string,
): string {
  const base = slug.replace(/[^a-z0-9]+/gi, '-');
  const titleId = `svg-${base}-t`;
  const descId = `svg-${base}-d`;

  return svg
    .replace(
      '<svg ',
      `<svg role="img" aria-labelledby="${titleId} ${descId}" `,
    )
    .replace(
      /(<svg[^>]*>)/,
      `$1<title id="${titleId}">${escapeXml(title)}</title><desc id="${descId}">${escapeXml(description)}</desc>`,
    );
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
