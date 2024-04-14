import React,{useState} from 'react'

export default function Fruits() {
    const objects = [
        {name:"aplle",price:"100rs"},
        {name:"orange",price:"100rs"},
        {name:"banana",price:"100rs"},
    ]
    // increment by factor
    const [count,setcount]= useState(0);
    const [factor,setFactor]= useState(0);
    function Increment(){
        setcount(count+factor);
    }
    function Decrement(){
        setcount(count-factor);
    }
    function factorIncrement(){
        setFactor(factor+1);
    }
    function factorDecrement(){
        setFactor(factor-1);
    }
    function seting(){
        setcount(100);
    }
    function sayHello(){
       
        alert('hi')
    }
  return (
    <> 
    {objects.map((value)=>{
    return <ol>{value.name}is a price of{value.price} and {value.price} </ol>
    })}
    <button onClick={sayHello}>click me</button><br></br><br></br>
    <button onClick={Increment}>increment</button>
    
    <br></br><br></br>
    <button onClick={Decrement}>decrement</button>
   
    <br></br><br></br>
    <button onClick={seting}>click me</button>
    Result of setting value:{count}
    <br></br>
    <button onClick={factorIncrement}>factor increment</button>
    <button onClick={factorDecrement}>factor decrement</button>
    result of factor:
    {factor}
    </>
  )
}
