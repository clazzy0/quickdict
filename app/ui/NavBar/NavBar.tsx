import Link from "next/link";
import Logo from "@/app/ui/NavBar/Logo";
import NavBarAuthButton from "@/app/ui/NavBar/NavBarAuthButton";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center h-[70px] mx-3 md:mx-12">
      <div className="flex items-center">
        <Logo />
      </div>

      <div className="flex items-center">
        <NavBarAuthButton />
      </div>
    </nav>
  );
}
