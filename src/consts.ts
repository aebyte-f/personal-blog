// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = '看故事';
export const SITE_DESCRIPTION = '看故事的記錄';

export const DEFAULT_LOCALE_SETTING = "zh-hk";

export const LOCALES_SETTING: Record<string, { label: string; lang?: string; dir?: 'ltr' | 'rtl' }> = {
  "zh-hk": {
    label: "繁體中文",
    lang: "zh-HK",
  },
  "en": {
    label: "English",
    lang: "en-US",
  },
  "ja": {
    label: "日本語",
    lang: "ja-JP",
  }
};