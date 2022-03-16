import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router';
export default function Product({productId = 100}) {
  const router = useRouter();
  return (
    <div>
        <h2>
          <Link href='/product/1'><a>
            Product 1</a>
          </Link>
        </h2>
        <h2>
          <Link href='/product/2'><a>
            Product 2</a>
          </Link>
        </h2>
        <h2>
          <Link href='/product/3'><a>
            Product 3</a>
          </Link>
        </h2>
        <h2>
          <Link href={`/product/${productId}`} replace><a>
            Product {productId}</a>
          </Link>
        </h2>
        <button onClick={()=>router.replace('/product/1')}>Products 1</button>
    </div>
  )
}
