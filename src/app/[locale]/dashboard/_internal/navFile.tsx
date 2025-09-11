"use client";
import { Sections, useResume } from "@/zustand/resume.zustand";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Nav() {
  const { setSection } = useResume();
  const t = useTranslations("Navigation");

  return (
    <nav style={{ display: "flex", gap: "1rem", padding: 0, margin: 0 }}>
      <Link
        href={"/dashboard?home=true"}
        onClick={() => setSection(Sections.Home)}
      >
        {t("home")}
      </Link>
      <Link
        href={"/dashboard?about=true"}
        onClick={() => setSection(Sections.About)}
      >
        {t("about")}
      </Link>
      <Link
        href={"/dashboard?contact=true"}
        onClick={() => setSection(Sections.Contact)}
      >
        {t("contact")}
      </Link>
      <Link
        href={"/dashboard?experience=true"}
        onClick={() => setSection(Sections.Experience)}
      >
        {t("experience")}
      </Link>
    </nav>
  );
}
