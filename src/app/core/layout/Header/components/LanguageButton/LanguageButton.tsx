import { useLanguage } from "../../../../../features/contexts/LanguageContext/LanguageContextProvider";

import "./LanguageButton.scss";

export default function LanguageButton() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button class="language-button" onClick={toggleLanguage}>
      {language() === "en" ? <p>🇺🇸</p> : <p>🇧🇷</p>}
    </button>
  );
}
