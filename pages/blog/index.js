import { useState } from "react"
import useSWR from "swr"
import axios from "axios"

function CommentList() {
  const [commentData, setCommentData] = useState([])
  const [userComment, setUserComment] = useState("")

  const loadComment = async () => {
    const { data } = await axios.get("/api/blog")
    setCommentData(data)
  }

  const addComment = async () => {
    await axios.post("/api/blog", { userComment })
  }

  const deleteComment = async (commentId) => {
    const { data } = await axios.delete(`/api/blog/${commentId}`)
    setCommentData(data)
  }

  return (
    <>
      <input
        type="text"
        placeholder="Add comment..."
        onChange={(e) => setUserComment(e.target.value)}
      />
      <button onClick={addComment}>Add comment</button>
      <button onClick={loadComment}>Load comment</button>
      {commentData.map((i) => (
        <div key={i.id}>
          <h2>
            {i.id}. {i.text}
          </h2>
          <button
            onClick={() => {
              deleteComment(i.id)
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  )
}

export default CommentList
