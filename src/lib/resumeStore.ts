import { create } from 'zustand'

export type ResumeFormFields = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  // Add more fields here as needed
};

export const useResumeStore = create<{
  formData: ResumeFormFields;
  setField: <K extends keyof ResumeFormFields>(key: K, value: ResumeFormFields[K]) => void;
}>((set) => ({
  formData: {
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
  },
  setField: (key, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [key]: value,
      },
    })),
}));
