import {create} from 'zustand';


type LangStore = {
    lang: "fr" | "en";
    setLang: (lang: "fr" | "en") => void;
};

export const useLangStore = create<LangStore>(set => ({
        lang:  localStorage.getItem("lang") ? localStorage.getItem("lang") === "fr" ? "fr" : "en" : "fr",
        setLang: (lng): void => {
            set({
                lang: lng
            });
            localStorage.setItem("lang", lng);
        }
    })
);