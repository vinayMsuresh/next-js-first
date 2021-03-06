function Post({post}){
    return(
        <>
        <h2>Post Details</h2>
        <hr/>
        <h3>{post.id} {post.title}</h3>
        <p>{post.body}</p>
        <hr/>
        </>
    )
}

export default Post;
export async function getStaticPaths(){
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const data = await response.json();

    // const paths = data.map(dt=>{
    //     return {
    //         params:{postid:`${dt.id}`}
    //     }
    // });
    return{
        paths: [{
            params:{postid:'1'}
        },
    ],
    // paths:paths,
    fallback:'blocking'
    }
}
export async function getStaticProps(context){
    const {params} = context;
    const response = await fetch(`http://localhost:4000/posts/${params.postid}`);
    const data = await response.json();
    return {
        props:{
            post:data,
        },
        revalidate:10,
    }
}