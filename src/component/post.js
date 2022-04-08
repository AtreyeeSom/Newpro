import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Container } from 'react-bootstrap'
export const Post = () => {
    const [data, setData]=useState()
    useEffect(()=>{
       axios.get("https://jsonplaceholder.typicode.com/todos")
       .then(res=>{
          //  console.log("ggg",res.data);
           setData(res.data)
       })
       .catch(err=>console.log(err))
    })
    const arr=data?.map((d)=>{
      return(
      <tr>
      <td>{d.userId}</td>  
      <td>{d.id}</td> 
      <td>{d.title}</td> 
      </tr>
      )
    })
  return (
    <div>
      <Container>
        <table>
          <tr>
            <th>userId</th>
            <th>Id</th>
            <th>Title</th>
           </tr>
          {arr}
        </table>
        </Container>
    </div>
  )
}
