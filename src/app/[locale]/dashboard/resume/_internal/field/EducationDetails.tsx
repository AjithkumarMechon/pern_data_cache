import { useTranslations } from "next-intl";
import React from "react";

export default function EducationDetails() {
  const t = useTranslations("EducationDetails");
  const educationInfo = [
    { label: t("school"), value: "XYZ University" },
    { label: t("degree"), value: "Bachelor of Science" },
    { label: t("fieldOfStudy"), value: "Computer Science" },
    { label: t("yearOfGraduation"), value: "2023" },
    { label: t("grade"), value: "85%" },
    { label: t("certifications"), value: "React JS, Next.js" },
  ];

  return (
    <div>
      <h1 className="font-bold flex">Education Details</h1>

      {educationInfo.map((info) => (
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
