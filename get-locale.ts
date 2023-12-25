import 'server-only'
import type { Locale } from './i18n-config'

// We enumerate all locales here for better linting and typescript support
// We also get the default import for cleaner types
const locales = {
  cn: () => import('./public/locales/cn.json').then((module) => module.default),
  jp: () => import('./public/locales/jp.json').then((module) => module.default),
}

export const getLocale = async (locale: Locale) =>
  locales[locale]?.() ?? locales.cn()