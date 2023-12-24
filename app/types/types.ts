export type AuthModalProps = {
  modalOption: "login" | "kickoff" | "emailStatus"
  prevModalOption: "login" | "kickoff" | "emailStatus"
  emailStatus: "success" | "failure"
  setModalOption: (option: "login" | "kickoff" | "emailStatus") => void
  setPrevModalOption: (option: "login" | "kickoff" | "emailStatus") => void
  setEmailStatus: (status: "success" | "failure") => void
  closeModal: () => void
}

export type ProfileIconProps = {
  name?: string | null
  email?: string | null
  image?: string | null
}
