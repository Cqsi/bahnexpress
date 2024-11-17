export const locales = ['en', 'fi'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'fi';

export function isValidLocale(tested: string): tested is Locale {
  return locales.some((locale) => locale === tested);
}