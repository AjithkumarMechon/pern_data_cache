"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

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

    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0) {
      segments[0] = selectedLang; // replace the locale
    } else {
      segments.unshift(selectedLang); // add if missing
    }

    const newPath = "/" + segments.join("/");
    router.push(newPath);
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
