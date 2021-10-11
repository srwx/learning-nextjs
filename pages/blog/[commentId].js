// =============================== This page is Pre-Rendering ===============================
import { data } from "../../db"
import axios from "axios"

function Comment(props) {
  const { comment } = props
  return (
    <div>
      {comment.id}. {comment.text}
    </div>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
    ],
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const { commentId } = context.params

  const comment = data.find((i) => i.id === parseInt(commentId))

  // ไม่ควรใช้ axios แบบด้านล่าง เพราะในเมื่อไฟล์นี้เรามี db.js อยู่แล้ว ถ้าเราใช้ .find() หาตรงๆเลย จะเร็วกว่า เพราะไม่ต้องส่งรีเควสไปหา /api/blog
  // const { data } = await axios.get(
  //   `http://localhost:3000/api/blog/${commentId}`
  // )
  return {
    props: {
      comment,
    },
  }
}
export default Comment
