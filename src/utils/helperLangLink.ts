import useLanguageStore from "@/zustand/language.zustand";

export function useLangLink(path: string) {
  const { lang } = useLanguageStore();
  return `/${lang}${path.startsWith("/") ? path : "/" + path}`;
}
