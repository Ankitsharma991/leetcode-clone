import { atom } from "recoil";

export type AuthModalState = {
  isOpen: boolean;
  type: "login" | "register" | "forgotPassword";
};

export const initialAuthModalState: AuthModalState = {
  isOpen: false,
  type: "login",
};

export const authModalState = atom<AuthModalState>({
  key: "authModalState",
  default: initialAuthModalState,
});
