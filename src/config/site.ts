import { DEFAULT_OG_IMAGE, bookCoverPath, bookOgArtPath } from '../utils/seo';

export const DEFAULT_SITE_URL = 'https://lucasjappert.github.io';

export const BOOK_OG_IMAGE_WIDTH = 1536;
export const BOOK_OG_IMAGE_HEIGHT = 1024;

export function getSiteUrl(): string {
	return (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, '');
}

export function getBasePath(): string {
	return import.meta.env.BASE_URL;
}

/** Ruta absoluta en el sitio desplegado (respeta BASE_URL). */
export function absoluteUrl(path: string): string {
	const site = getSiteUrl();
	const base = getBasePath();

	if (!path) {
		const root = `${site}${base}`.replace(/([^:]\/)\/+$/, '');
		return root || site;
	}

	const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
	return `${site}${base}${normalizedPath}`.replace(/([^:]\/)\/+/g, '$1');
}

/** Prefer `art/<slug>/og.jpg`; CoverArt / crawlers fall back if 404. */
export function bookOgImageUrl(slug: string): string {
	return absoluteUrl(bookOgArtPath(slug));
}

export function bookCoverImageUrl(slug: string): string {
	return absoluteUrl(bookCoverPath(slug));
}

export function defaultOgImageUrl(): string {
	return absoluteUrl(DEFAULT_OG_IMAGE);
}
