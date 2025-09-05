"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { setLocale } from "@/utils/setLocale";

export default function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [lang, setLang] = useState("en"); // default

  const options = [
    { code: "en", label: "English" },
    { code: "ta", label: "Tamil" },
  ];

  // Sync current lang with pathname on mount or pathname change
  useEffect(() => {
    if (!pathname) return;
    const segments = pathname.split("/").filter(Boolean);
    if (
      segments.length > 0 &&
      options.some((opt) => opt.code === segments[0])
    ) {
      setLang(segments[0]);
    }
  }, [pathname]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);

    const url = new URL(window.location.href);
    const segments = url.pathname.split("/").filter(Boolean);

    segments[0] = selectedLang; // replace first segment safely
    setLocale(lang);
    router.push("/" + segments.join("/") + url.search + url.hash);
  };

  return (
    <div>
      <select value={lang} onChange={handleChange}>
        {options.map((opt) => (
          <option key={opt.code} value={opt.code}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
