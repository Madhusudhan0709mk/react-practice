import React,{useState} from 'react'

export const Form = () => {
    const [user,usertext] = useState('')
    const [pass,passtext] = useState('')
    // const[list,tasklist] = useState('')
    // to handle multiple input like this we use object creation inside the usestate hook
  function handleSubmit(e){
    e.preventDefault();
    localStorage.setItem('user',JSON.stringify(user))
    localStorage.setItem('password',JSON.stringify(pass))
  }
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <form onSubmit={handleSubmit}>
        <input onChange={(e)=>{usertext(e.target.value)}} type="text" value={user}  />
        <input onChange={(e)=>{passtext(e.target.value)}} type="text" value={pass} />  
        <button type="submit" >SUBMIT</button>
    </form>
    </>
  )
}
export default Form;