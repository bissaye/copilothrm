import { useLangStore } from "../../../../services/store";
import "./style.css";
import "@fontsource/baloo-2"; 
import "@fontsource/baloo-2/400.css"; 
import "@fontsource/outfit"; 
import "@fontsource/outfit/400.css"; 



export interface ComponentSwitcherProps {
    theme?: "theme-1" | "theme-2";
    className?:string;
}

const LanguageSwitcherComponent: React.FC<ComponentSwitcherProps> = (props) => {

    const { theme = "theme-1", className } = props;
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