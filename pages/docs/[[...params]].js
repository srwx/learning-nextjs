import { useRouter } from "next/router"

function DocList() {
  const router = useRouter()
  const { params } = router.query
  console.log(params)
  if (params.length === 3) {
    return (
      <h1>
        Document of {params[0]} of {params[1]} of {params[2]}
      </h1>
    )
  }
  return <h1>Document lists</h1>
}

export default DocList
