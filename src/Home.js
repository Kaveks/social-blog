import BlogList from "./Bloglist";
import useFetchState from "./Fetchstate";
const Home = () => {
    let title="All Blogs"
    const {data:blogs,isPending,error} =useFetchState('http://localhost:8000/blogs')
    return ( 
        <div className="home">
            { error && <div style={{color:'red'}}>{error}</div>} 
            {isPending && <div>loading ......</div>}
            {blogs && <BlogList blogs={blogs} title={title}/>}
        </div>
    );
}
export default Home;