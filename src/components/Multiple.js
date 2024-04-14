import { React,useState } from "react";
import image from '../assets/inputform.png';
const Multiple = () =>{
    const [text,settext] = useState({});
    function handleSubmit(e){
        e.preventDefault();
        console.log(text)
    }

    function handleInput(e){
const name = e.target.value;
const value = e.target.value;
settext(values =>({...values,[name]:value}))
    }

return(
    <>
    <br></br>
    <br></br>
    <br></br>
    <div class="col-md-6 offset-md-3">
    <form onSubmit={handleSubmit}>
    <label for="exampleInputEmail1" class="form-label">name </label>
        <input type="text"  class="form-control" name="name" value={text.name} onChange={handleInput} />
        <label for="exampleInputEmail1" class="form-label">password </label>
        <input type="text"  class="form-control" name="password" value={text.password} onChange={handleInput}  />
        <button type="submit"  class="btn btn-primary">submit</button>
    </form>
    </div>
    <br></br>
    <figure className="figure">
      <img src={image} className="figure-img img-fluid rounded" alt="Map" />
      <figcaption className="figure-caption">Image of code</figcaption>
    </figure>
    </>
)
}

export default Multiple;