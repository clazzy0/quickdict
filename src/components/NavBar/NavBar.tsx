import Logo from "@/components/Logo"
import ProfileIconAndDropdown from "./ProfileIconAndDropdown"
import AuthModalButtons from "./AuthModalButtons"
import { auth } from "@/lib/auth"

export default async function NavBar() {
  const session = await auth()

  return (
    <nav className="flex justify-between items-center h-[65px] md:px-12 px-6 border-gray-100 border-b">
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
