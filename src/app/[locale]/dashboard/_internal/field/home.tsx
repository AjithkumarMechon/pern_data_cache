import { useTranslations } from "next-intl";
import PersonalDetails from "./PersonalDetails";
import EducationDetails from "./EducationDetails";

interface FieldPageProps {
  field: string | string[] | undefined | null;
}

const data: Record<string, string> = {
  home: "home",
  about: "about",
  contact: "contact",
  experience: "experience",
};

const FieldPage: React.FC<FieldPageProps> = ({ field }) => {
  const t = useTranslations("Home");

  const fieldKey =
    typeof field === "string"
      ? field
      : Array.isArray(field)
      ? field[0]
      : undefined;

  if (!fieldKey) return <div>No section selected.</div>;

  const translationsMap: Record<string, string> = {
    home: t("homeText"),
    about: t("aboutText"),
    contact: t("contactText"),
    experience: t("experienceText"),
  };

  return (
    <div>
      {translationsMap[data[fieldKey]] || "No data available for this section."}
      {/* Conditionally render components if fieldKey is "home" */}
      {fieldKey === "home" ? (
        <>
          <hr />
          <PersonalDetails />
          <hr />
          <EducationDetails />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default FieldPage;
