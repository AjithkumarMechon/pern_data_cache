import { Pen } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export default function PersonalDetails() {
  const t = useTranslations("PersonalDetails");
  const personalInfo = [
    { label: t("name"), value: "*****" },
    { label: t("dob"), value: "xx-yyy-zzzz" },
    { label: t("age"), value: "**" },
    { label: t("bloodGroup"), value: "O+" },
    { label: t("marriageStatus"), value: "Single" },
    { label: t("religion"), value: "Hindu" },
    { label: t("nativePlace"), value: "Chennai" },
  ];

  return (
    <div>
      <h1 className="font-bold flex items-center">
        Personal Information
        <Pen
          className="h-4 w-4 mx-4 cursor-pointer"
          fill="black"
          stroke="black"
        />
      </h1>

      {personalInfo.map((info) => (
        <div key={info.label} className="flex gap-4">
          <label htmlFor={info.label} className="w-32">
            {info.label}
          </label>
          <p>{info.value}</p>
        </div>
      ))}
    </div>
  );
}
