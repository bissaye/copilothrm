import { useLangStore } from "../../../../services/store";
import "./style.css";


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
            className={"select-custom "+
                theme === "theme-1" ? "theme-1" : `` +
                theme === "theme-2" ? "btn btn-rounded-2 uppercase justify-self-start" : ``}
        value={lang} onChange={(e) => setLang(StringToLang(e.target.value))}>
            <option value="fr">FR</option>
            <option value="en">EN</option>
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