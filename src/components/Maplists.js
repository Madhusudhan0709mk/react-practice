import React from 'react'
import image from '../assets/map.png'; 
export const Maplists = () => {
    const arr = ["apple","pineaple","guava","orange","list  of fruits"]
    arr.sort();
    const fruits = arr.map((fruit) => {
        return <li className="list-group-item" key={fruit}>{fruit}</li>;
      });

      const arr2 = ["tiger","lion","cheetah"];
      arr2.sort()
      const animals = arr2.map((animal)=>{
        return <li className="list-group-item" key={animal}>{animal}</li>;
      })

      
  return (
    <>
    <h1>THIS IS LIST MAP PRACTICE</h1>
    <p>List of fruits</p>
    <ul className="list-group">
    {fruits}
    </ul>
    <p>List of Animals</p>
    <ul className="list-group">
    {animals}
    </ul>
    <figure className="figure">
      <img src={image} className="figure-img img-fluid rounded" alt="Map" />
      <figcaption className="figure-caption">Image of code</figcaption>
    </figure>
    </>
  )
}
export default Maplists;