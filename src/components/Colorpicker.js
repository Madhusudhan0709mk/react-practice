import React, { useState } from 'react'
import image from'../assets/colorpick.png'
export const Colorpicker = () => {
    const [color,setColor] = useState("#ffff");

  return (
   
 <>
    <h1>Colorpicker</h1>
    
    <div className='color-changer' style={{height:'200px',width:'300px',backgroundColor:color}}></div>
    <input type='color' onChange={(e)=>{setColor(e.target.value)}}></input>
<span>choose your color</span>
    <h1>View practice code</h1>
    <figure className="figure">
      <img src={image} className="figure-img img-fluid rounded" alt="Map" />
      <figcaption className="figure-caption">Image of code</figcaption>
    </figure>
 </>
  )
};
export default Colorpicker;