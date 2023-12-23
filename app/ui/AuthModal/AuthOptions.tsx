import Link from "next/link"
import Image from "next/image"
import googleLogo from "@/public/auth-logos/google-logo.svg"
import githubLogo from "@/public/auth-logos/github-logo.svg"
import EmailInputForm from "@/app/ui/AuthModal/EmailInputForm"
import { signIn } from "next-auth/react"
import { useContext } from "react"
import { AuthModalContext } from "@/app/ui/AuthModal/authModalContext"

export default function AuthOptions() {
  const context = useContext(AuthModalContext)

  return (
    <div className="flex flex-col">
      <h3 className="text-[22px] font-semibold tracking-tight">
        {context.modalOption === "login" ? "Sign in" : "Sign up"}
      </h3>
      <p className="text-balance text-sm text-gray-500 mb-8">
        to continue to QuickDict
      </p>

      <button
        className="w-full h-[45px] mb-2 rounded-md border border-black active:scale-95"
        onClick={() => signIn("google")}
      >
        <div className="text-[15px] relative flex justify-center items-center w-full">
          <Image
            src={googleLogo}
            alt="Google Logo"
            className="absolute left-3"
            width={22}
            height={22}
          />
          Continue with Google
        </div>
      </button>
      <button
        className="w-full h-[45px] rounded-md border border-black active:scale-95 mb-6"
        onClick={() => signIn("github")}
      >
        <div className="text-[15px] relative flex justify-center items-center w-full">
          <Image
            src={githubLogo}
            alt="GitHub Logo"
            className="absolute left-3"
            width={22}
            height={22}
          />
          Continue with GitHub
        </div>
      </button>

      <div className="flex justify-center items-center mb-4">
        <div className="w-full h-[1px] bg-gray-300"></div>
        <p className="mx-3 text-gray-500 text-sm">or</p>
        <div className="w-full h-[1px] bg-gray-300"></div>
      </div>

      <EmailInputForm />

      <br />

      <div className="flex flex-row justify-between items-center">
        <p className="text-sm text-gray-500 font-medium">
          {context.modalOption === "login"
            ? "First time here? "
            : "Have an account? "}
          <span
            className="hover:font-bold  hover:text-[#1e8895] text-[#27b1c1] cursor-pointer"
            style={{ transition: "color 0.3s" }}
            onClick={
              context.modalOption === "login"
                ? () => context.setModalOption("kickoff")
                : () => context.setModalOption("login")
            }
          >
            {context.modalOption === "login" ? "Sign up" : "Sign in"}
          </span>
        </p>
        <div>
          <Link
            href="/privacy"
            className="text-sm text-gray-500  mr-3 hover:font-semibold hover:text-gray-600"
            onClick={() => context.closeModal()}
          >
            Privacy
          </Link>
          <Link
            href="/tos"
            className="text-sm text-gray-500 hover:font-semibold hover:text-gray-600"
            onClick={() => context.closeModal()}
          >
            Terms
          </Link>
        </div>
      </div>
    </div>
  )
}
