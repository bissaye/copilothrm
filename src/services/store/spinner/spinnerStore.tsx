import { create } from "zustand";
import { SpinnerStore } from "../../../utils/interfaces/type";

export const useSpinnerStore = create<SpinnerStore>((set) => ({
loading: false,
text: '',
showSpinner: (text?: string) => set({
    loading: true,
    text: text
}),
hideSpinner: () => set({loading: false})
}))