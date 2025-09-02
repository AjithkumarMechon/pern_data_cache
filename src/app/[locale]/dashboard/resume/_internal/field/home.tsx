import { useTranslations } from "next-intl";

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
    </div>
  );
};

export default FieldPage;
