export type AuthModalProps = {
  option: "login" | "kickoff"
  setOption: (option: "login" | "kickoff") => void
  closeModal: () => void
}

export type ProfileIconProps = {
  name?: string | null
  email?: string | null
  image?: string | null
}
