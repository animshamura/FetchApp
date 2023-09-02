import React, {useReducer, useEffect} from 'react'
import axios from 'axios'
const initial = {
    load : true,
    post : {},
    error : ''
}

const reduce =  (state, action) => {
   switch(action.type){
    case 'success' :
        return {
        laod :  false,
        post : action.payload,
        error : ''

    }
    case 'fail' : 
         return {
            load : false ,
            post : {},
            error : 'Something went wrong!'
         }

    case 'default' : return state
   }
}
function FetchRed() {
   const [c, disp] =  useReducer(reduce,initial)
   useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/posts/2')
    .then(response => {
     disp({type : 'success', payload : response.data})
    })
    .catch(error => {
        disp({type : 'fail'})
    })
   },[])
  return (
    <div>
      <h1> { c.load? "Loading ..." : c.post.title}</h1>
      <h1> { c.error? c.error : null}</h1>
    </div>
  )
}

export default FetchRed
