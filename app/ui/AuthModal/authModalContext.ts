import { createContext } from "react"
import { AuthModalProps } from "@/app/types/types"

export const AuthModalContext = createContext<AuthModalProps>({
  modalOption: "login",
  setModalOption: () => {},
  closeModal: () => {},
})
