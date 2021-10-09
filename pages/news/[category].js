function FilterByCategory(props) {
  const { data, category } = props
  return (
    <>
      <h1>Filter by category : {category}</h1>
      {data.map((i) => (
        <div key={i.id}>
          <h3>
            {i.id}. {i.title}
          </h3>
          <p>{i.description}</p>
          <hr />
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps(context) {
  //   console.log(context)
  const { category } = context.query
  console.log(`Generating Filter by category : ${category} page...`)
  const res = await fetch(`http://localhost:4000/news?category=${category}`)
  const data = await res.json()
  return {
    props: {
      data,
      category,
    },
  }
}

export default FilterByCategory
