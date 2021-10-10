import React, { useState, useEffect } from "react"

function Dashboard() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:4000/dashboard")
      const data = await res.json()
      console.log(data)
      setData(data)
      setLoading(false)
    }
    fetchData()
  }, [])

  // Next.js จะทำ pre-render initial page (คือ pre-render return แรก) ดังนั้น /dashboard จะ pre-render แค่ Loading... ตรงที่แสดง Dashboard page จะไม่ถูก pre-render
  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Dashboard page</h1>
      <h3>Posts : {data.posts}</h3>
      <h3>Likes : {data.likes}</h3>
      <h3>Followers : {data.followers}</h3>
      <h3>Followings : {data.followings}</h3>
    </>
  )
}

export default Dashboard
