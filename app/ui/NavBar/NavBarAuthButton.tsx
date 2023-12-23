"use client"

import styles from "@/app/ui/button.module.css"
import AuthModal from "@/app/ui/AuthModal/AuthModal"
import { useState } from "react"
import { notoSans } from "@/app/ui/fonts"
import { AuthModalContext } from "@/app/ui/AuthModal/authModalContext"

export default function NavBarAuthButton() {
  const [showModal, setShowModal] = useState(false)
  const [modalOption, setModalOption] = useState<"login" | "kickoff">("login")
  const [showEmailModal, setShowEmailModal] = useState(false)

  const openModal = (option: "login" | "kickoff") => {
    setModalOption(option)
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
    setShowEmailModal(false)
  }

  return (
    <div className={notoSans.className}>
      <button
        className={`${styles.buttonLight} md:mr-2`}
        onClick={() => openModal("login")}
      >
        Login
      </button>
      <button
        className={`${styles.buttonDark} hidden sm:inline-block`}
        onClick={() => openModal("kickoff")}
      >
        Kick Off
      </button>

      {showModal && (
        <AuthModalContext.Provider
          value={{
            modalOption,
            setModalOption,
            closeModal,
          }}
        >
          <AuthModal />
        </AuthModalContext.Provider>
      )}
    </div>
  )
}
