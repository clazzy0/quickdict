import { AuthModalProps } from "@/types/types"
import { createContext, useContext } from "react"

// For the AuthModal component in NavBar
export const AuthModalContext = createContext<AuthModalProps | undefined>(
  undefined
)

export function useAuthModalContext() {
  const authModalContext = useContext(AuthModalContext)
  if (authModalContext === undefined)
    throw new Error(
      "useAuthModalContext must be used within a AuthModalContextProvider"
    )
  return authModalContext
}
