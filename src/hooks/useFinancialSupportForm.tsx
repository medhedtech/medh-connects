
import { create } from "zustand";

interface FinancialSupportFormState {
  isOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
}

export const useFinancialSupportForm = create<FinancialSupportFormState>((set) => ({
  isOpen: false,
  openForm: () => set({ isOpen: true }),
  closeForm: () => set({ isOpen: false }),
}));
