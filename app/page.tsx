import styles from "@/app/ui/NavBar/button.module.css";
import { ptSerif } from "@/app/ui/fonts";

export default function Home() {
  return (
    <div
      className={`${ptSerif.className} mx-auto flex flex-col justify-center items-center text-center px-4 w-full`}
    >
      <h1
        style={{ lineHeight: 1.25 }}
        className="max-w-4xl text-balance tracking-tight text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-3"
      >
        The most optimized voice activated <br />
        dictionary for paper book readers.
      </h1>
      <button
        className={`${styles.buttonTryNow} absolute top-12 mb-[80px]`}
        role="button"
      >
        Start Session
      </button>
    </div>
  );
}
