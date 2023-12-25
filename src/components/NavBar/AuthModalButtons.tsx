"use client"

import AuthModal from "@/components/NavBar/AuthModal/AuthModal"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { AuthModalContext } from "@/lib/context"

export default function AuthModalButtons() {
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
    <div>
      <Button
        className={`sm:mr-8`}
        onClick={() => openModal("login")}
        size="lg"
        variant="link"
      >
        Login
      </Button>
      <Button
        className={` hidden sm:inline-block`}
        onClick={() => openModal("kickoff")}
        size="lg"
        variant="link"
      >
        Kick Off
      </Button>

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
