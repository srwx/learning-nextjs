import { useRouter } from "next/router"

function ReviewList() {
  const router = useRouter()
  const productId = router.query.productId
  return (
    <>
      <h2>Reviews of product {productId}</h2>
      <h3>Review 1</h3>
      <h3>Review 2</h3>
      <h3>Review 3</h3>
      <h3>Review 4</h3>
      <h3>Review 5</h3>
      <h3>Review 6</h3>
    </>
  )
}

export default ReviewList
