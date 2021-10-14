import Link from "next/link"
import { signIn } from "next-auth/client"

function Blog() {
  return (
    <>
      <h1>Blog page</h1>
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
    </>
  )
}

export default Blog
