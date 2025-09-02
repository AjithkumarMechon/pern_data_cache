import { Pen } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

export default function PersonalDetails() {
  const t = useTranslations("PersonalDetails");
  const locale = useLocale();

  const personalInfo = [
    { label: t("name"), value: t("nameField") },
    { label: t("dob"), value: t("dobField") },
    { label: t("age"), value: t("ageField") },
    { label: t("bloodGroup"), value: t("bloodGroupField") },
    { label: t("maritalStatus"), value: t("maritalStatusField") },
    { label: t("religion"), value: t("religionField") },
    { label: t("nativePlace"), value: t("cityField") },
  ];

  return (
    <div>
      <h1 className="font-bold flex items-center">
        {t("PersonalDetails")}
        {/* <Pen
          className="h-4 w-4 mx-4 cursor-pointer"
          fill="black"
          stroke="black"
        /> */}
      </h1>

      {personalInfo.map((info) => (
        <div key={info.label} className="flex gap-4">
          <label htmlFor={info.label} className="w-48">
            {info.label}
          </label>
          <p>{info.value}</p>
        </div>
      ))}
    </div>
  );
}
