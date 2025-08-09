export type Locale = 'en' | 'es';
import en from './en.json';
import es from './es.json';

const dict: Record<Locale, unknown> = { en, es };

export function t(lang: Locale, key: string): string {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return key.split('.').reduce((acc: any, k) => (acc ? acc[k] : ''), dict[lang]) ?? '';
}
