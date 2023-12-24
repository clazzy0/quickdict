"use client"

import styles from "@/app/ui/button.module.css"
import AuthModal from "@/app/ui/NavBar/AuthModal/AuthModal"
import { useState } from "react"
import { notoSans } from "@/app/ui/fonts"
import { AuthModalContext } from "@/app/lib/context"

export default function NavBarAuthButton() {
  const [showModal, setShowModal] = useState(false)
  const [modalOption, setModalOption] = useState<
    "login" | "kickoff" | "emailStatus"
  >("login")
  const [emailStatus, setEmailStatus] = useState<"success" | "failure">(
    "failure"
  )
  const [prevModalOption, setPrevModalOption] = useState<
    "login" | "kickoff" | "emailStatus"
  >("login")

  const openModal = (option: "login" | "kickoff") => {
    setModalOption(option)
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
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
            prevModalOption,
            emailStatus,
            setModalOption,
            setPrevModalOption,
            setEmailStatus,
            closeModal,
          }}
        >
          <AuthModal />
        </AuthModalContext.Provider>
      )}
    </div>
  )
}
