import { useState } from "react";
import {useHistory} from "react-router-dom"
const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('Patrick');
    const [isPending,setIsPending]=useState(false);
    const history=useHistory()
    const handleSubmit = (e) => {
        e.preventDefault();
        let blog ={title,body,author};
        setIsPending(true)
        let url='http://localhost:8000/blogs/'
        fetch(url,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added')
            setIsPending(false)
            //history.go(-1);
            history.push('/')
        })
    }
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form  onSubmit={handleSubmit}>
                <label >title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                <label > body</label>
                <textarea value= {body} type="text" onChange={(e) => setBody(e.target.value)}required/>
                <label >author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Patrick">patrick</option>
                    <option value="Mbugua">Mbugua</option>
                    <option value="Kaveks">Kaveks</option>
                    <option value="Others">Others</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog....</button>}
            </form>

        </div>
     );
}
 
export default Create;