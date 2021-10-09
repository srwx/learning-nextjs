import Link from "next/link"

function NewList(props) {
  const { news } = props
  return (
    <div>
      <h1>News List</h1>
      {news.map((i) => (
        <div key={i.id}>
          <h3>
            {i.id}. {i.title} -{" "}
            <Link href={`/news/${i.category}`} passHref>
              {i.category}
            </Link>
          </h3>
        </div>
      ))}
    </div>
  )
}

export default NewList

export const getServerSideProps = async (context) => {
  console.log(`Generating /news page...`)
  const res = await fetch("http://localhost:4000/news")
  const data = await res.json()
  return {
    props: {
      news: data,
    },
  }
}
