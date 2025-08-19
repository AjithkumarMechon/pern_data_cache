interface FieldPageProps {
  field: string | string[] | undefined | null;
}

const data: Record<string, string> = {
  home: "🏠 Next.js & React.js Developer with 5 years of experience in web application development, possessing a deep understanding of thesoftware development life cycle (SDLC). Proficient in building scalable, high-performance web applications using React.js, Next.js,JavaScript, TypeScript, CSS, and HTML. Skilled in designing modern UI/UX, implementing state management (Redux), optimizingperformance with SSR, SSG, and ISR, and integrating secure authentication methods (JWT, OAuth). Passionate about writing clean,maintainable code and delivering seamless user experiences.",
  about: "I am a passionate developer who loves building things.",
  contact: "You can reach me at ajithkumaranandandev@gmail.com.",
  experience: "I have 5+ years of experience in full-stack development.",
};

const FieldPage: React.FC<FieldPageProps> = ({ field }) => {
  let fieldKey: string | undefined;
  if (typeof field === "string") {
    fieldKey = field;
  } else if (Array.isArray(field) && field.length > 0) {
    fieldKey = field[0]; // take first element if array
  } else {
    fieldKey = undefined;
  }

  if (!fieldKey) return <div>No section selected.</div>;

  return <div>{data[fieldKey]}</div>;
};

export default FieldPage;
