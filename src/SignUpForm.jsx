import { useState,useEffect } from "react";

const SignUpForm =(props)=>{
  const [username, setUsername]= useState ('');
  const [password, setPassword]= useState ('');
  const [error, setError]= useState (null) 
// const tokenCapture =props.setToken
const handleSubmit =async (event)=>{
event.preventDefault()
try{
  const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", 
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: username,
        password: password,
      })
    }
  );
  const tokenObj = await response.json();
  // console.log (tokenObj.token)
  props.setToken(tokenObj.token)
}
catch{setError(error.message)}

}
return(
<>
<h2>Sign Up</h2>

<form onSubmit={handleSubmit}>
        <input placeholder ="username" value={username} onChange={(event)=>{setUsername(event.target.value)}}></input>
        <input placeholder ="password" type='password'></input>
        <button>Submit</button>
      </form>

</>

)


}

export default SignUpForm