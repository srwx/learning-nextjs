import useSWR from "swr"

const fetcher = async () => {
  const res = await fetch("http://localhost:4000/dashboard")
  const data = await res.json()
  return data
}

function DashboardSWR() {
  const { data, error } = useSWR("/api/dashboard", fetcher)

  if (error) return <h1>Error</h1>
  if (!data) return <h1>Loading...</h1>

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

export default DashboardSWR
