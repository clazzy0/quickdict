import React from "react"
import CloseButton from "@/app/ui/AuthModal/CloseButton"
import AuthOptions from "@/app/ui/AuthModal/AuthOptions"
import { useContext } from "react"
import { AuthModalContext } from "@/app/ui/AuthModal/authModalContext"
import Logo from "../Logo"

export default function AuthModal() {
  const context = useContext(AuthModalContext)

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      context.closeModal()
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-30"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white w-full h-full md:w-[480px] md:h-[650px] rounded-lg shadow-lg animate-slide-in flex flex-col justify-center items-center p-12 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-6 right-6">
          <CloseButton onClose={context.closeModal} />
        </div>
        <div className="flex flex-col w-full">
          <AuthOptions />
        </div>
      </div>
    </div>
  )
}
