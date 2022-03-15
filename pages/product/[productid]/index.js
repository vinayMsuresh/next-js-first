import React from 'react'
import { useRouter } from 'next/router'
export default function Details() {
    const router = useRouter();
    const id = router.query.productid;
  return (
    <div>
        <h2>Details of product {id}</h2>
    </div>
  )
}
