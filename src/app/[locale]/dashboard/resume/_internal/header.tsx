"use client";

import { useTranslations } from "next-intl";

export default function ResumeHeader() {
  const t = useTranslations("Header");

  return (
    <div className="flex flex-col md:flex-row justify-around gap-4 mt-8">
      <header>
        <h1 className="text-2xl font-bold">{t("name")}</h1>
        <p className="text-lg text-gray-600">{t("role")}</p>
      </header>

      <address className="not-italic space-y-1">
        <p>
          <a
            href={`tel:${t("phone")}`}
            className="text-blue-600 hover:underline"
          >
            {t("phone")}
          </a>
        </p>
        <p>
          <a
            href={`mailto:${t("email")}`}
            className="text-blue-600 hover:underline"
          >
            {t("email")}
          </a>
        </p>
        <p>
          <a
            href={`https://www.linkedin.com/in/${t("linkedin")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {t("linkedinLabel")}: {t("linkedin")}
          </a>
        </p>
        <p>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(
              t("location")
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {t("location")}
          </a>
        </p>
      </address>
    </div>
  );
}
