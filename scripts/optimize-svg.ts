/**
 * SVG Optimizer utility for Kimo Emoji UI Library
 */

export function cleanSvg(rawSvg: string): string {
  return rawSvg
    .replace(/<!--[\s\S]*?-->/g, '') // remove comments
    .replace(/<\?xml[\s\S]*?\?>/i, '') // remove xml preamble
    .replace(/<!DOCTYPE[\s\S]*?>/i, '') // remove doctype
    .replace(/\s+/g, ' ') // collapse multi-spaces
    .replace(/>\s+</g, '><') // remove whitespace between tags
    .trim();
}

export function extractSvgInner(svgContent: string): string {
  const match = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  return match ? match[1] : svgContent;
}

export function extractViewBox(svgContent: string): string {
  const match = svgContent.match(/viewBox=["']([^"']+)["']/i);
  return match ? match[1] : '0 0 128 128';
}
