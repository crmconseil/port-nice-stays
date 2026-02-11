import { Helmet } from "react-helmet-async";

const LANGUAGES = ["fr", "en", "it", "es", "pt"];
const HREFLANG_MAP: Record<string, string> = {
  fr: "fr-FR",
  en: "en-GB",
  it: "it-IT",
  es: "es-ES",
  pt: "pt-PT",
};
const BASE_URL = "https://niceportduplex.com";

interface HreflangTagsProps {
  path: string;
}

const HreflangTags = ({ path }: HreflangTagsProps) => {
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      {LANGUAGES.map((lang) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={HREFLANG_MAP[lang]}
          href={url}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={url} />
    </Helmet>
  );
};

export default HreflangTags;
