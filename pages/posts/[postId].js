import { useRouter } from "next/router"

function PostInfo({ id, title, body }) {
  const router = useRouter()

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>
        {id}. {title}
      </h1>
      <p>{body}</p>
    </>
  )
}

export default PostInfo

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json()

  // const paths = data.map((i) => ({ params: { postId: `${i.id}` } })) // postId ต้องเป็นชื่อเดียวกับชื่อไฟล์
  // return {
  //   paths,
  //   fallback: true,
  // }

  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const postId = params.postId
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  )
  const data = await res.json()
  console.log(`Generating page for /posts/${postId}`)
  return {
    props: {
      id: data.id,
      title: data.title,
      body: data.body,
    },
  }
}
