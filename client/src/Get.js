import React from 'react'
import {useGetProfileQuery} from "./services/profile"
import { useState,useEffect } from 'react';


//import Met from "./Met"

const Get = () => {

  const {data,isLoading,isError,isSuccess} = useGetProfileQuery();
  const [cat, setcat] = useState([])

useEffect(() => {
  if (data && isSuccess) {
    setcat(data.categories)
  }
  
}, [data])

    // const {data,isLoading,isError,isSuccess} = useGetProfileQuery();
    // console.log(isLoading)
    // console.log(isError)
    // console.log(isSuccess)
    // console.log(data)

    

  return (
    <>

    <h1>
      dil  tut gaya
    </h1>
    {
   cat.map((value,_id)=>{

         return     <div key ={value._id}>
         
         <h1>{value.name}</h1>
         <h1>{value.price}</h1>
         
         <h1>{value.quantity}</h1>
         <h1>{value.st}</h1>
         {/* <h1>{value.rdoc}</h1> */}
        
   <img src={`http://localhost:9000/${value.pimage}`} alt="product pic"  />
   {/* <img src={`http://localhost:9000/${value.rdoc}`} alt="product pic" srcset="" /> */}
         
             </div>
    })
    }
    
    </>
  )
}

export default Get;
