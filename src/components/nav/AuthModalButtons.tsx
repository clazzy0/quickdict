"use client"

import AuthModal from "@/components/nav/auth-modal/AuthModal"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { AuthModalContext } from "@/context/context"

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
        className="hidden sm:inline-block sm:mr-4"
        onClick={() => openModal("login")}
        variant="link"
      >
        Login
      </Button>
      <Button
        onClick={() => openModal("kickoff")}
        variant="secondary"
        size={"sm"}
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
