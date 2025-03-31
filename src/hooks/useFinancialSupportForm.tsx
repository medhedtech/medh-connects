
import { create } from "zustand";

export type SupportType = "education" | "upskilling";

interface FinancialSupportFormState {
  isOpen: boolean;
  formType: SupportType;
  openForm: (type: SupportType) => void;
  closeForm: () => void;
}

export const useFinancialSupportForm = create<FinancialSupportFormState>((set) => ({
  isOpen: false,
  formType: "education",
  openForm: (type: SupportType) => set({ isOpen: true, formType: type }),
  closeForm: () => set({ isOpen: false }),
}));
