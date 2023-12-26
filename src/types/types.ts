export type UserInfoProps = {
  id: string | null | undefined
  email?: string | null | undefined
  name?: string | null | undefined
  image?: string | null | undefined
}

export type AuthModalProps = {
  modalOption: "login" | "kickoff" | "emailStatus"
  prevModalOption: "login" | "kickoff" | "emailStatus"
  emailStatus: "success" | "failure"
  setModalOption: (option: "login" | "kickoff" | "emailStatus") => void
  setPrevModalOption: (option: "login" | "kickoff" | "emailStatus") => void
  setEmailStatus: (status: "success" | "failure") => void
  closeModal: () => void
}
