import React from 'react'

export const Cond = () => {
    let a = 10;
    let  b= 20;
    var text =50;
    let tex = 60;
  return (
    <>
    <br></br> <br></br> <br></br> <br></br>
        {a>0? true : false}
        {b ===20 ?  text :tex}
    </>
  )
}
export default Cond;