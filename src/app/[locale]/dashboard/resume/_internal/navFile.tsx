"use client";

import { Sections, useResume } from "@/zustand/resume.zustand";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useSearchParams, useRouter, useParams } from "next/navigation";
import { useEffect } from "react";

export default function Nav() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setSection } = useResume();
  const params = useParams();
  const t = useTranslations("Navigation");
  const locale = (params?.locale as string) ?? "en";

  const homeParam = searchParams?.get("home");

  useEffect(() => {
    if (homeParam !== "true") {
      router.push(`/${locale}/dashboard/resume?home=true`);
    }
  }, []);

  const langHref = (sectionQuery: Record<string, boolean>) => {
    const stringified: Record<string, string> = {};
    for (const [key, value] of Object.entries(sectionQuery)) {
      stringified[key] = String(value);
    }
    const query = new URLSearchParams(stringified).toString();
    return `/${locale}/dashboard/resume?${query}`;
  };

  return (
    <nav style={{ display: "flex", gap: "1rem", padding: 0, margin: 0 }}>
      <Link
        href={langHref({ home: true })}
        onClick={() => setSection(Sections.Home)}
      >
        {t("home")}
      </Link>
      <Link
        href={langHref({ about: true })}
        onClick={() => setSection(Sections.About)}
      >
        {t("about")}
      </Link>
      <Link
        href={langHref({ contact: true })}
        onClick={() => setSection(Sections.Contact)}
      >
        {t("contact")}
      </Link>
      <Link
        href={langHref({ experience: true })}
        onClick={() => setSection(Sections.Experience)}
      >
        {t("experience")}
      </Link>
    </nav>
  );
}
