import { useRouter } from 'next/router'
import React from 'react'

export default function detail() {
   const router = useRouter()
   const productId = router.query.productId
  return (
    <div>
      product detail {productId}
    </div>
  )
}
