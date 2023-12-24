import Logo from "@/app/ui/Logo"
import ProfileIcon from "@/app/ui/NavBar/ProfileIcon"
import NavBarAuthButton from "@/app/ui/NavBar/NavBarAuthButtons"
// import { auth } from "next-auth/react"

export default async function NavBar() {
  // const session = await auth()

  return (
    <nav className="flex justify-between items-center h-[70px] mx-3 md:mx-12">
      <div className="flex items-center">
        <Logo />
      </div>

      <div className="flex items-center">
        {/* {!session?.user ? (
          <NavBarAuthButton />
        ) : (
          <ProfileIcon
            name={session?.user?.name}
            email={session?.user?.email}
            image={session?.user?.image}
          />
        )} */}
        <NavBarAuthButton />
      </div>
    </nav>
  )
}
