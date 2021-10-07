import Link from "next/link"

function Home() {
  return (
    <>
      <Link href="/">
        <a>Home </a>
      </Link>
      <Link href="/about">
        <a>About </a>
      </Link>
      <Link href="/blog">
        <a>Blog </a>
      </Link>
      <hr />
      <h1>Home Page</h1>
    </>
  )
}

export default Home
