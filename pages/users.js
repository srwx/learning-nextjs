import User from "../components/user"

function UserList({ user }) {
  console.log(user)
  return (
    <>
      <h1>List of Users</h1>
      {user.map((i) => (
        <User key={i.id} name={i.name} email={i.email} />
      ))}
    </>
  )
}

export default UserList

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
  console.log(data)
  return {
    props: { user: data },
  }
}
