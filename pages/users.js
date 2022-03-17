import User from "../components/User";

function Users({user}){
    return(
        <>
            <h1>List of users</h1>
            {
                user.map(ur =>
                    <div key={ur.id}>
                        <User user={ur} />
                        <hr/>
                    </div>
                )
            }
        </>
    )
}

export default Users;

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const user = await response.json();
    return {
        props:{
            user:user,
        }
    }
}