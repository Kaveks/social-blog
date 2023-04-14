import { useHistory,useParams } from 'react-router-dom';
import useFetchState from './Fetchstate';
const BlogDetails = () => {
    const {id} = useParams()
    const {data:blog,isPending,error} =useFetchState('http://localhost:8000/blogs/' + id)
    let url = 'http://localhost:8000/blogs/'
    const history=useHistory()
    const handleClick = () =>{
        fetch(url + blog.id,{
            method: 'DELETE',
        }).then(() =>{
            history.push('/')
        })
    }
    return ( 
        <div className="blog-details">
            {isPending && <div> loading...</div>}
            {error && <div> {error}</div>}
            {blog && (
            <article>
                <h2>{blog.title}</h2>
                <div>{blog.body}</div>
                <p ><u><b style={{color:'#07955f'}}>written by: {blog.author}</b></u></p>
                <button onClick={handleClick}>Delete This Blog</button>
            </article>)}
        </div>
     );
}
 
export default BlogDetails;