import Link from "next/link"
import { useRouter } from "next/router"
import { signIn, signOut, useSession } from "next-auth/react"
// Styles
import styles from "../styles/Signin.module.css"

function Signin() {
  const router = useRouter()
  const { data: session, status } = useSession()

  const handleSignin = (provider) => {
    signIn(provider, { callbackUrl: "http://localhost:3000/dashboard" })
  }

  if (status == "loading") {
    return <div>Loading...</div>
  }

  // Redirect to dashboard page if user already login
  if (status == "authenticated") {
    router.push("/")
  }

  return (
    <div className={styles.container}>
      <Link href="/signin">
        <a
          onClick={(e) => {
            e.preventDefault()
            handleSignin("github")
          }}
        >
          Sign in with GitHub
        </a>
      </Link>
      <Link href="/signin">
        <a
          onClick={(e) => {
            e.preventDefault()
            handleSignin("google")
          }}
        >
          Sign in with Google
        </a>
      </Link>
      <Link href="/signin">
        <a
          onClick={(e) => {
            e.preventDefault()
            handleSignin("facebook")
          }}
        >
          Sign in with Facebook
        </a>
      </Link>
    </div>
  )
}

export default Signin
