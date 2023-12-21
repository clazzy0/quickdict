import React from "react";
import CloseButton from "@/app/ui/CloseButton";
import Image from "next/image";
import googleLogo from "@/public/auth-logos/google-logo.svg";
import twitterLogo from "@/public/auth-logos/twitter-logo.svg";
import emailLogo from "@/public/auth-logos/email-logo.svg";
import { useState } from "react";
import { AuthModalProps } from "@/app/lib/types";

export default function AuthModal({
  option,
  setOption,
  onClose,
}: AuthModalProps) {
  const [showEmailInput, setShowEmailInput] = useState(false);

  const handleEmailClick = () => {
    setShowEmailInput(true);
  };

  const closeEmailInput = () => {
    setShowEmailInput(false);
  };

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-30"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white w-full h-full md:w-[570px] md:h-[670px] rounded-lg shadow-lg animate-slide-in flex flex-col justify-center items-center p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-6 right-6">
          <CloseButton onClose={onClose} />
        </div>
        <div className="flex flex-col justify-center items-center space-y-4">
          {showEmailInput ? (
            <div className="flex flex-col justify-center items-center text-center">
              <h1 className="text-4xl tracking-tighter font-medium mb-6">
                {option === "login"
                  ? "Login with Email."
                  : "Kick off with Email."}
              </h1>
              <p className="text-balance text-sm text-gray-600 max-w-xs mb-12">
                QuickDict will send you an email with a <br /> link to sign in.
                No password required.
              </p>
              <p
                className="font-bold hover:text-[#1e8895] text-[#27b1c1] cursor-pointer"
                onClick={closeEmailInput}
              >
                ← All {option === "login" ? "login" : "sign up"} options
              </p>
            </div>
          ) : (
            <>
              <h1 className="text-4xl tracking-tighter font-medium mb-12">
                {option === "login" ? "Welcome back!" : "Let's get started."}
              </h1>
              <button className="w-[300px] h-[48px] mb-2 rounded-3xl border border-black active:scale-95">
                <div className="relative flex justify-center items-center w-full">
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
              <button className="w-[300px] h-[48px] mb-2 rounded-3xl border border-black active:scale-95">
                <div className="relative flex justify-center items-center w-full">
                  <Image
                    src={twitterLogo}
                    alt="Twitter Logo"
                    className="absolute left-3"
                    width={22}
                    height={22}
                  />
                  Continue with Twitter
                </div>
              </button>
              <button
                className="w-[300px] h-[48px] rounded-3xl border border-black active:scale-95"
                onClick={handleEmailClick}
              >
                <div className="relative flex justify-center items-center w-full">
                  <Image
                    src={emailLogo}
                    alt="Email Logo"
                    className="absolute left-3"
                    width={22}
                    height={22}
                  />
                  Continue with Email
                </div>
              </button>

              <p className="py-6">
                {option === "login"
                  ? "First time here? "
                  : "Already have an account? "}
                <span
                  className="font-bold hover:text-[#1e8895] text-[#27b1c1] cursor-pointer"
                  style={{ transition: "color 0.3s" }}
                  onClick={
                    option === "login"
                      ? () => setOption("kickoff")
                      : () => setOption("login")
                  }
                >
                  {option === "login" ? "Kick off" : "Login"}
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
