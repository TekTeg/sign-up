import { useState, useEffect } from "react";

const SignUpForm = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null)
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: username,
            password: password,
          })
        }
      );
      const tokenObj = await response.json();
      props.setToken(tokenObj.token)
    }
    catch { setError(error.message) }

  }
  return (
    <>
      <h2>Sign Up</h2>
      {
        error? <p>Unable to get data</p>:null
      }
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          value={username}
          onChange={(event) => { setUsername(event.target.value) }}>
        </input><br/><br/>
        <input
          placeholder="password"
          type='password' 
          value={password}
          onChange={(event) => { setPassword(event.target.value) }}>
        </input><br/><br/>
        <button>Submit</button>
      </form>

    </>

  )


}

export default SignUpForm