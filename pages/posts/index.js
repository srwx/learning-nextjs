import Link from "next/link"

function PostList({ posts }) {
  return (
    <>
      <h1>Post List</h1>
      {posts.map((i) => (
        <div key={i.id}>
          <Link href={`posts/${i.id}`} passHref>
            <h3>
              {i.id}. {i.title}
            </h3>
          </Link>
          <hr />
        </div>
      ))}
    </>
  )
}

export default PostList

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json()
  return {
    props: {
      posts: data,
    },
  }
}
