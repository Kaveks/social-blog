import { useParams } from 'react-router-dom';
import useFetchState from './Fetchstate';
const BlogDetails = () => {
    const {id} = useParams()
    const {data:blog,isPending,error} =useFetchState('http://localhost:8000/blogs/' + id)
    return ( 
        <div className="blog-details">
            {isPending && <div> loading...</div>}
            {error && <div> {error}</div>}
            {blog && (
            <article>
                <h2>{blog.title}</h2>
                <div>{blog.body}</div>
                <p>written by: {blog.author}</p>
            </article>)}
        </div>
     );
}
 
export default BlogDetails;