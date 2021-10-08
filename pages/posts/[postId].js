function PostInfo({ id, title, body }) {
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
  const paths = data.map((i) => ({ params: { postId: `${i.id}` } })) // postId ต้องเป็นชื่อเดียวกับชื่อไฟล์
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const postId = params.postId
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  )
  const data = await res.json()
  return {
    props: {
      id: data.id,
      title: data.title,
      body: data.body,
    },
  }
}
