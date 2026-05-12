import {useState} from 'react'

export default function Conditionalrender(){

  const [show,setShow]=useState(true)

  return (

    <>
    <button onClick={()=>setShow(true)}>Show</button>
    <button onClick={()=>setShow(false)}>hide</button>
    
    {show? <h3>content is showed</h3> : <h3></h3>}
    </>
  )

}
