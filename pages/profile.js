import { useRouter } from "next/router"

function Profile() {
  const router = useRouter() // react hook ต้องประกาศใน body ของ main function เท่านั้น (เคสนี้ ถ้าประกาศใน handleClick จะติด error)

  const handleClick = () => {
    router.push("/") // redirect to localhost:3000/
  }
  return (
    <>
      <h1>Profile page</h1>
      <button onClick={handleClick}>Home</button>
    </>
  )
}

export default Profile
