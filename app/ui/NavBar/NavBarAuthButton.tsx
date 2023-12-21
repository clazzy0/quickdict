"use client";

import styles from "@/app/ui/NavBar/button.module.css";
import AuthModal from "@/app/ui/Modals/AuthModal";
import { useState } from "react";
import { notoSans } from "@/app/ui/fonts";

export default function NavBarAuthButton() {
  const [showModal, setShowModal] = useState(false);
  const [modalOption, setModalOption] = useState<"login" | "kickoff">("login");

  const openModal = (option: "login" | "kickoff") => {
    setModalOption(option);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={notoSans.className}>
      <button
        className={`${styles.buttonLight} md:mr-2`}
        onClick={() => openModal("login")}
      >
        Login
      </button>
      <button
        className={`${styles.buttonDark} hidden sm:inline-block`}
        onClick={() => openModal("kickoff")}
      >
        Kick Off
      </button>

      {showModal && (
        <AuthModal
          option={modalOption}
          setOption={setModalOption}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
