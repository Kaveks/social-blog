import { useState,useEffect } from "react"
const useFetchState = (url) => {
    const [data,setData]=useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error,setError] = useState(null)
    useEffect(() =>{
        const abortControl=new AbortController()
        setTimeout(()=>{
            fetch(url,{signal:abortControl.signal})
            .then(response => {
               if(!response.ok){
                throw Error('Could not fetch data from the source');
               }
                return response.json();
            })
            .then(data => {
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('fetch aborted')
                }else{
                    setIsPending(false)
                    setError(err.message);
                }
              
            })
        },1000);
        return ()=> abortControl.abort();
        }, [url],);
    return ( {
        data,isPending,error
    } );
}
 
export default useFetchState;