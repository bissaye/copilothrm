import {create} from 'zustand';
import { pageIds } from '../../../utils/constantes';


type pageStore = {
    page: typeof pageIds[keyof typeof pageIds];
    setPage: (value: typeof pageIds[keyof typeof pageIds]) => void;
};

export const usePageStore = create<pageStore>(set => ({
        page: localStorage.getItem("page") ? localStorage.getItem("page") as string  : pageIds.LandingPage,
        setPage: (value): void => {
            set({
                page: value
            });
            localStorage.setItem("page", value);
        }
    })
);