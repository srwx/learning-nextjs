import { useRouter } from "next/router"

function ProductDetail() {
  const router = useRouter() // useRouter() return object ที่ใช้สำหรับ route (เช่น ดึง query string ที่อยู่ใน url)
  const productId = router.query.id // get query string
  return <h1>Detail of Product {productId}</h1>
}

export default ProductDetail
