import { create } from "zustand";
import { InviteMemberStore } from "../../../utils/interfaces/type";

export const useInviteMemberStore = create<InviteMemberStore>((set) => ({
    showInviteModal: false,
    setShowInviteModal: (show: boolean) => set({
        showInviteModal: show
    })
}))