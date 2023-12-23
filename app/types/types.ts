export type AuthModalProps = {
  modalOption: "login" | "kickoff"
  setModalOption: (option: "login" | "kickoff") => void
  closeModal: () => void
}

export type ProfileIconProps = {
  name?: string | null
  email?: string | null
  image?: string | null
}
