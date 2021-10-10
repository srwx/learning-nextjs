import { data } from "../../../db"

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(data)
  } else if (req.method === "POST") {
    const id = Date.now()
    const { userComment } = req.body
    const newComment = {
      id,
      text: userComment,
    }
    data.push(newComment)
    res.status(200).json(data)
  }
}
