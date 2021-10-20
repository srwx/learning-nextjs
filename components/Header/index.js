import Link from "next/link"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
// Styles
import styles from "./Header.module.css"

function Header() {
  const { data: session, status } = useSession()
  console.log(session)
  console.log(status)
  if (status == "loading") {
    return <div>Loading...</div>
  } else if (status == "authenticated") {
    return (
      <>
        <div>
          {session.user.email} | {session.user.name}
        </div>
        <button onClick={() => signOut()}>Logout</button>
      </>
    )
  }
  return (
    <>
      <Link href="/signin">
        <a>Sign in</a>
      </Link>
    </>
  )
}

export default Header
