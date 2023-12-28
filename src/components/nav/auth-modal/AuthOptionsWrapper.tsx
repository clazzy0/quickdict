import Link from "next/link"
import AuthOptions from "./AuthOptions"
import { useAuthModalContext } from "@/context/context"

export default function AuthOptionsWrapper() {
  const { modalOption, setModalOption, closeModal } = useAuthModalContext()
  return (
    <div className="flex flex-col w-full">
      <h3 className="text-[22px] font-semibold tracking-tight">
        {modalOption === "login" ? "Sign in" : "Sign up"}
      </h3>
      <p className="text-balance text-sm text-gray-500 mb-6">
        to continue to QuickDict
      </p>

      <AuthOptions />

      <br />

      <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center">
        <p className="text-sm text-gray-500 mb-3 xs:mb-0">
          {modalOption === "login" ? "First time here? " : "Have an account? "}
          <span
            className="hover:font-bold font-semibold cursor-pointer"
            style={{ transition: "color 0.3s" }}
            onClick={
              modalOption === "login"
                ? () => setModalOption("kickoff")
                : () => setModalOption("login")
            }
          >
            {modalOption === "login" ? "Sign up" : "Sign in"}
          </span>
        </p>

        <p>
          <Link
            href="/privacy"
            className="text-sm text-gray-500 mr-3 hover:font-semibold hover:text-gray-600"
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
        </p>
      </div>
    </div>
  )
}
