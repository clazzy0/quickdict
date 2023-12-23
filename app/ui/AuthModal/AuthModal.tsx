import React from "react"
import Link from "next/link"
import CloseButton from "@/app/ui/AuthModal/CloseButton"
import AuthOptions from "@/app/ui/AuthModal/AuthOptions"
import { useContext } from "react"
import { AuthModalProps } from "@/app/types/types"

export default function AuthModal({
  option,
  setOption,
  closeModal,
}: AuthModalProps) {
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
        className="bg-white w-full h-full md:w-[480px] md:h-[650px] rounded-lg shadow-lg animate-slide-in flex flex-col justify-center items-center p-12 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-6 right-6">
          <CloseButton onClose={() => closeModal()} />
        </div>

        <div className="flex flex-col w-full">
          <h3 className="text-[22px] font-semibold tracking-tight">
            {option === "login" ? "Sign in" : "Sign up"}
          </h3>
          <p className="text-balance text-sm text-gray-500 mb-6">
            to continue to QuickDict
          </p>

          <AuthOptions />

          <br />

          <div className="flex flex-row justify-between items-center">
            <p className="text-sm text-gray-500 font-medium">
              {option === "login" ? "First time here? " : "Have an account? "}
              <span
                className="hover:font-bold  hover:text-[#1e8895] text-[#27b1c1] cursor-pointer"
                style={{ transition: "color 0.3s" }}
                onClick={
                  option === "login"
                    ? () => setOption("kickoff")
                    : () => setOption("login")
                }
              >
                {option === "login" ? "Sign up" : "Sign in"}
              </span>
            </p>
            <div>
              <Link
                href="/privacy"
                className="text-sm text-gray-500  mr-3 hover:font-semibold hover:text-gray-600"
                onClick={() => closeModal()}
              >
                Privacy
              </Link>
              <Link
                href="/tos"
                className="text-sm text-gray-500 hover:font-semibold hover:text-gray-600"
                onClick={() => closeModal()}
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
