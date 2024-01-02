import React from "react"
import CloseButton from "./CloseButton"
import EmailStatus from "./EmailStatus"
import AuthOptionsWrapper from "./AuthOptionsWrapper"
import { useAuthModalContext } from "@/context/AuthModalContext"

export default function AuthModal() {
  const { modalOption, closeModal } = useAuthModalContext()

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-30"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white w-full h-full xs:w-[480px] xs:h-[575px] rounded-lg shadow-lg animate-slide-in flex flex-col justify-center items-center xs:px-12 px-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-6 right-6">
          <CloseButton onClose={() => closeModal()} />
        </div>

        {(modalOption === "login" || modalOption === "kickoff") && (
          <AuthOptionsWrapper />
        )}

        {modalOption === "emailStatus" && <EmailStatus />}
      </div>
    </div>
  )
}
