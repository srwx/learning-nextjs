import { useRouter } from "next/router"

function About() {
  const router = useRouter() // react hook ต้องประกาศใน body ของ main function เท่านั้น (เคสนี้ ถ้าประกาศใน handleClick จะติด error)

  const handleClick = () => {
    router.replace("/profile") // overide /profile to top of history stack (ถ้า top of history stack เป็นอะไรก็ตาม จะถูก overide เป็น /profile เสมอ)
  }

  return (
    <>
      <h1>About page</h1>
      <button onClick={handleClick}>Profile</button>
    </>
  )
}

export default About
