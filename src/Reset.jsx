const Reset =(props)=>{
  const signUpPage =()=>{
    props.setToken (null)
  }
  return(
    <button onClick={signUpPage}>Return to Sign Up Page</button>
  )
  
}

export default Reset