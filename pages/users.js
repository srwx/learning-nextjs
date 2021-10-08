function User({ user }) {
  console.log(user)
  return (
    <>
      <h1>List of Users</h1>
      {user.map((i) => {
        return (
          <div key={user.id}>
            <h6>{i.name}</h6>
            <h6>{i.email}</h6>
          </div>
        )
      })}
    </>
  )
}

export default User

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
  console.log(data)
  return {
    props: { user: data },
  }
}
