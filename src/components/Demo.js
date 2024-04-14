import React from 'react'

function Demo(){
    const array = ['animal','bluewhale','tiger','buffallo']
   
  return (
    <>
    {array.map((arrays) =>{
     return <ol>{arrays}</ol>
    })}
    </>
  )
}
export default Demo;
