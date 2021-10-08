import Link from "next/link"

export default function Home() {
  return (
    <>
      <div>
        <Link href="/users">
          <a>User List </a>
        </Link>
        <Link href="/posts">
          <a>Post List </a>
        </Link>
      </div>
      <hr />
      <h1>Home apge</h1>
    </>
  )
}
