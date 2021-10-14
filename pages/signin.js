import Link from "next/link"
import { signIn, signOut } from "next-auth/client"
// Styles
import styles from "../styles/Signin.module.css"

function Signin() {
  return (
    <div className={styles.container}>
      <Link href="/api/auth/signin">
        <a
          onClick={(e) => {
            e.preventDefault()
            signIn("github")
          }}
        >
          Sign in with GitHub
        </a>
      </Link>
      <Link href="/api/auth/signin">
        <a
          onClick={(e) => {
            e.preventDefault()
            signIn("google")
          }}
        >
          Sign in with Google
        </a>
      </Link>
    </div>
  )
}

export default Signin
