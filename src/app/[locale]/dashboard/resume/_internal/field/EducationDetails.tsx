import { useTranslations } from "next-intl";
import React from "react";

export default function EducationDetails() {
  const t = useTranslations("EducationDetails");

  const educationInfo = [
    { label: t("school"), value: t("schoolField") },
    { label: t("degree"), value: t("degreeField") },
    { label: t("fieldOfStudy"), value: t("fieldOfStudyField") },
    { label: t("yearOfGraduation"), value: t("yearOfGraduationField") },
    { label: t("grade"), value: t("gradeField") },
    { label: t("certifications"), value: t("certificationsField") },
  ];

  return (
    <div>
      <h1 className="font-bold flex">{t("EducationDetails")}</h1>

      {educationInfo.map((info) => (
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
