import Link from "next/link";
import {useRouter} from 'next/router';
function Home(){
  const router = useRouter();
  return <>
    <h1>Home Page</h1>
    <Link href='/product'>
      <a>Products</a>
    </Link> <br/>

    <Link href='/blog'>
      <a>Blog</a>
    </Link> <br/>

    <button onClick={()=>router.push('/product')}>Products</button>
  </>
}

export default Home;