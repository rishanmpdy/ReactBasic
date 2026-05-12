import {useState} from 'react'

export default  function Multiplebtn(){

    const [btn,setBtn]=useState("")



    return (


        <>
        <button onClick={(e)=>setBtn("one")}>btn1</button>
        <button onClick={(e)=>setBtn("two")}>btn2</button>
        <button onClick={(e)=>setBtn("three")}>btn3</button>
        
        {btn ==="one" && <h1>hello</h1>}
        {btn ==="two" && <h1>Welcome</h1>}
        {btn ==="three" && <h1>dr</h1>}
        
        </>
    )
}