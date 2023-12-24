import Logo from "@/components/Logo"
import ProfileIconAndDropdown from "./ProfileIconAndDropdown"
import AuthModalButtons from "./AuthModalButtons"
import { auth } from "@/lib/auth"

export default async function NavBar() {
  const session = await auth()

  return (
    <nav className="flex justify-between items-center h-[70px] mx-3 md:mx-12">
      <div className="flex items-center">
        <Logo />
      </div>

      <div className="flex items-center">
        {!session?.user ? (
          <AuthModalButtons />
        ) : (
          <ProfileIconAndDropdown image={session?.user?.image} />
        )}
      </div>
    </nav>
  )
}
