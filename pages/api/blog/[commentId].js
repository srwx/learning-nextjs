import { data } from "../../../db"

function handler(req, res) {
  const { commentId } = req.query
  if (req.method === "GET") {
    const comment = data.find((i) => i.id === parseInt(commentId))
    res.status(200).json(comment)
  } else if (req.method === "DELETE") {
    const deletedComment = data.find((i) => i.id === parseInt(commentId))
    const index = data.findIndex((i) => i.id === parseInt(commentId))
    data.splice(index, 1)
    res.status(200).json(data)
  }
}

export default handler
