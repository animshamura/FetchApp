import React,{useState, useEffect} from 'react'
import axios from 'axios'
function Fetch() {
    const [load, setLoad] = useState(true)
    const [error, setError] =  useState('')
    const [post, setPost] = useState({})
    useEffect(()=> {
     axios.get('https://jsonplaceholder.typicode.com/posts/1')
     .then(response => {
       setLoad(false)
       setPost(response.data)
       setError('')
     })
     .catch(error => {
        setLoad (false)
        setPost({})
        setError("Something went wrong!")
     })
    },[])
    return (
    <div>
      <h1> { load? "Loading ..." : post.title}</h1>
      <h1> { error? error : null}</h1>

    </div>
  )
}

export default Fetch
