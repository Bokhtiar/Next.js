import React from 'react'
import { useRouter } from 'next/router'

export default function detail() {
    const router = useRouter();
    const {productId, reviewId} = router.query
  return (
    <div>
      product id {productId} and review product id {reviewId}
    </div>
  )
}
