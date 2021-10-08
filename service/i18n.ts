import { useRouter } from 'next/router';

export type i18n = {
  language: string
  locale: string
  title: string
  description: string
  greeting: string
  guide: string
  changeLanguage: string
  changeLocale: string
};

/**
 * 日本語一覧
 */
export const ja: i18n = {
  language: "日本語",
  locale: "",
  title: "i18n 日本語ページ",
  description: "Qiita記事のために作成したページです。",
  greeting: "日本語ページへようこそ！",
  guide: "下のボタンをクリックすると、言語が切り替わります。",
  changeLanguage: "English",
  changeLocale: "en"
};

/**
 * 英語一覧
 */
export const en: i18n = {
  language: "English",
  locale: "en",
  title: "i18n English page",
  description: "This is a page I created for an article to be published on Qiita.",
  greeting: "Welcome to English page!",
  guide: "Click on the button below to switch languages.",
  changeLanguage: "日本語",
  changeLocale: "ja"
};

/**
 * useLocaleで取得用の関数
 */
 export const useLocale = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : ja;
  return { locale, t };
};

/**
 * Localeを引数に入れて、言語一覧を返す。
 */
export const text = (locale: string): i18n  => {
  switch (locale) {
    case "ja": return ja
    case "en": return en
  }
}