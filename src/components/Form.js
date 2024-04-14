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
    usertext('');
    passtext('');
    alert("your form has been submitted")
  };
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
     <div class="col-md-6 offset-md-3">
        <form onSubmit={handleSubmit}>
          <h1>FORM DATA WILL BE STORED IN LOCAL STORAGE</h1>
        <div class="mb-3 ">
        <label for="exampleInputEmail1" class="form-label">Username </label>
        <input type="text" class="form-control" onChange={(e)=>{usertext(e.target.value)}}  value={user}  aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input class="form-control" onChange={(e)=>{passtext(e.target.value)}} type="password" value={pass}  />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
</>
  )
}
export default Form;