import { React,useState } from "react";

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
    <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={text.name} onChange={handleInput} />
        <input type="text" name="password" value={text.password} onChange={handleInput}  />
        <button type="submit">submit</button>
    </form>
    </>
)
}

export default Multiple;