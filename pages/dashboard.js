import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import Header from "../components/Header"

export default function Dashboard() {
  const router = useRouter()
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/signin")
    },
  })
  if (status == "loading") {
    return <div>Loading...</div>
  } else {
    return (
      <>
        <Header />
        <div>Hello, {session.user.name}</div>
        <div>Email : {session.user.email}</div>
      </>
    )
  }
}
