import { create } from "zustand";
import { SpinnerStore } from "../../../utils/interfaces/type";

export const useSpinnerStore = create<SpinnerStore>((set) => ({
loading: false,
showSpinner: () => set({loading: true}),
hideSpinner: () => set({loading: false})
}))