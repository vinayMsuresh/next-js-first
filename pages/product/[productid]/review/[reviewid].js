import React from 'react'
import { useRouter } from 'next/router'
export default function ReviewDetails() {
    const router = useRouter();
    const {reviewid, productid} = router.query;
  return (
    <div>
        <h2>
            Review {reviewid} for product {productid}
        </h2>
    </div>
  )
}
