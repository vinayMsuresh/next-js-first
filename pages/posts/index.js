import Link from "next/link";
function PostLists({posts}){
    return(
        <>
            <h1>Posts List</h1>

            {
                posts.map(pt=>
                    <div key={pt.id}>
                        <Link href={`posts/${pt.id}`} passHref>
                        <h4>{pt.id} {pt.title}</h4>
                        </Link>
                        <hr/>
                    </div>)
            }
        </>
    )
}

export default PostLists;

export async function getStaticProps(){
    const response = await fetch('http://localhost:4000/posts');
    const data = await response.json();
    return{
        props:{
            posts:data,
        },
        revalidate: 10,
    }
}