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
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    {objects.map((value)=>{
    return <ol>{value.name}is a price of{value.price} and {value.price} </ol>
    })}
    <button onClick={sayHello} class="btn btn-primary">click me</button>clik to see alert box
    <br></br>
    <h2>First increment or decrement Factor then you can use to increse the number by factor</h2>
    <button onClick={Increment} class="btn btn-secondary">increment</button>
    <button onClick={Decrement} class="btn btn-danger">decrement</button>
    <button onClick={seting} class="btn btn-success">click me</button>
    Result of setting value:{count}
    <br></br>
    <button onClick={factorIncrement} class="btn btn-warning">factor increment</button>
    <button onClick={factorDecrement} class="btn btn-warning">factor decrement</button>
    result of factor:{factor}
    </>
  )
}
