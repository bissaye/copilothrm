import { useLangStore } from "../../../../services/store";
import "./style.css";



export interface ComponentSwitcherProps {
    theme?: "theme-1" | "theme-2";
    className?:string;
}

const LanguageSwitcherComponent: React.FC<ComponentSwitcherProps> = (props) => {

    const {className } = props;
    const { setLang, lang } = useLangStore();

    const StringToLang = (lang: string): "fr" | "en" => {
        return lang === "fr" ? "fr" : "en";
    }

    const defaultRender = () => (
        <select
          className={" font-body flex flex-row justify-between items-center min-w-32 px-3  min-h-9 text-black bg-gray-300  text-t3 rounded-m"}
          value={lang} onChange={(e) => setLang(StringToLang(e.target.value))}
        >
            <option value="fr">Français</option>
            <option value="en">English</option>
        </select>
    );

  return (
    <div className={className}>
      {defaultRender()}
    </div>
  );
}


export {
  LanguageSwitcherComponent as LanguageSwitcher
}