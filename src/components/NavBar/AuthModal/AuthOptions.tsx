import Image from "next/image"
import googleLogo from "/public/auth-logos/google-logo.svg"
import githubLogo from "/public/auth-logos/github-logo.svg"
import EmailInputForm from "./EmailInputForm"
import { signIn } from "next-auth/react"

export default function AuthOptions() {
  return (
    <>
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
    </>
  )
}
